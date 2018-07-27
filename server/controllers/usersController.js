import bcrypt from 'bcrypt';
import _ from 'lodash';
import userService from '../services/userService';
import validateUserSignup from '../middlewares/validateUserSignup';
import validateUserLogin from '../middlewares/validateUserLogin';
import generateAuthToken from '../middlewares/generateAuthToken';

userService.connection();

class USERS {
  static async signup(req, res) {
    const { error } = validateUserSignup(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {
      // eslint-disable-next-line
      name, email, mypassword,
    } = req.body;

    const anEntry = {
      name,
      email,
      mypassword
    };

    const getArray = await userService.getAll();
    const foundEntry = getArray.find(myentry =>
      (myentry.email.toLowerCase() === email.toLowerCase()));

    if (foundEntry) {
      return res.status(409).send('User already registered');
    }
    try {
      const salt = await bcrypt.genSalt(10);
      anEntry.mypassword = await bcrypt.hash(anEntry.mypassword, salt);
      await userService.saveUser(anEntry);
      const token = generateAuthToken(name, email);
      res.header('x-auth-token', token).send(_.pick(anEntry, ['name', 'email']));
    } catch (err) {
      throw err.message;
    }
  }


  static async login(req, res) {
    const { error } = validateUserLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {
      email, mypassword
    } = req.body;


    const foundEntry = await userService.loginUser(email);

    if (!foundEntry) {
      return res.status(400).send('Invalid email or password');
    }

    const foundPassword = foundEntry[0].mypassword;


    const validPassword = await bcrypt.compare(mypassword, foundPassword);
    if (!validPassword) return res.status(400).send('Invalid email or password');

    const token = generateAuthToken(foundEntry[0].name, foundEntry[0].email);

    res.send(token);
  }
}


export default USERS;
