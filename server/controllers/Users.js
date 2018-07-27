import bcrypt from 'bcrypt';
import _ from 'lodash';
import debuggerconsole from 'debug';
import db from '../dbConnect/connect';
import userService from '../services/UserService';
import generateAuthToken from '../middlewares/generateAuthToken';
import validateUserSignup from '../middlewares/validateUserSignup';

userService.connection();
const mydebugger = debuggerconsole('app:startup');

class Users {
  static async connection() {
    db.connect()
      .then(() => mydebugger('Connected to postgres...'))
      .catch(err => mydebugger('Could not connect', err));
  }
  static async signup(req, res) {
    const { error } = validateUserSignup(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {
      name, email, mypassword,
    } = req.body;

    const anEntry = {
      name,
      email,
      mypassword
    };

    const { rows } = await db.query('SELECT name, email, date_added FROM users');
    const foundEntry = rows.find(myentry =>
      (myentry.email.toLowerCase() === email.toLowerCase()));

    if (foundEntry) {
      return res.status(409).send({ message: 'User already registered' });
    }
    try {
      const salt = await bcrypt.genSalt(10);
      anEntry.mypassword = await bcrypt.hash(anEntry.mypassword, salt);
      const savedUser = await userService.saveUser(anEntry);
      const token = generateAuthToken(savedUser[savedUser.length - 1].id);
      res.header('x-auth-token', token).send(_.pick(anEntry, ['name', 'email'])); // assign pick to a const
    } catch (err) {
      throw err.message;
    }
  }
}


export default Users;
