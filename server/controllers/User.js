import bcrypt from 'bcrypt';
import _ from 'lodash';
import dbWaitConnect from 'bluebird';
import debuggerconsole from 'debug';
import config from 'config';
import validateUserLogin from '../helpers/validateUserLogin';
import validateUserSignup from '../helpers/validateUserSignup';
import generateAuthToken from '../helpers/generateAuthToken';


const mydebugger = debuggerconsole('app:startup');
mydebugger(config.get('db'));

const tryConnect = {
  promiseLib: dbWaitConnect
};
const promisedConnection = require('pg-promise')(tryConnect);

const dbInstance = promisedConnection(config.get('db'));

class User {
  static async signup(req, res) {
    const { error } = validateUserSignup(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {
      name, email, mypassword
    } = req.body;

    const anEntry = {
      name,
      email,
      mypassword
    };

    const singleUser = await dbInstance.result('SELECT name, email, date_added FROM users');
    const foundEntry = singleUser.rows.find(myentry =>
      (myentry.email.toLowerCase() === email.toLowerCase()));

    if (foundEntry) {
      return res.status(409).send({ message: 'User already registered' });
    }
    const salt = await bcrypt.genSalt(10);
    const mypassword2 = await bcrypt.hash(anEntry.mypassword, salt);


    const { rowCount } = await dbInstance.result(`INSERT INTO users (name, email, mypassword)
      VALUES ('${name}', '${email}', '${mypassword2}')`);
    if (rowCount === 1) {
      const { rows } = await dbInstance.result('SELECT id, name, email, date_added FROM users');
      const token = generateAuthToken(rows[rows.length - 1].id);
      res.header('x-auth-token', token).send(_.pick(anEntry, ['name', 'email'])); // assign pick to a const
    }
  }


  static async login(req, res) {
    const { error } = validateUserLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {
      email, mypassword
    } = req.body;

    const { rows, rowCount } = await dbInstance.result(`SELECT id, name, email, mypassword FROM users WHERE email = '${email}'`);

    if (rowCount === 0) {
      return res.status(400).send('Invalid email or password');
    }

    const foundPassword = rows[0].mypassword;

    const validPassword = await bcrypt.compare(mypassword, foundPassword);
    if (!validPassword) return res.status(400).send('Invalid email or password');

    const token = generateAuthToken(rows[0].id);

    res.send(token);
  }
}

export default User;
