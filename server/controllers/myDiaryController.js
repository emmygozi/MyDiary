import dbWaitConnect from 'bluebird';
import debuggerconsole from 'debug';
import config from 'config';
import validateEntry from '../helpers/validateEntry';

const mydebugger = debuggerconsole('app:startup');
console.log(config.get('db'));

const tryConnect = {
  promiseLib: dbWaitConnect
};
const promisedConnection = require('pg-promise')(tryConnect);

const dbInstance = promisedConnection(config.get('db'));

class Entries {
  // we put underscore '_' in front of req to show that it is intentionally unused
  static async getEntry(_req, res) {
    try {
      const viewAll = await dbInstance.any('SELECT id, title, message, date_added FROM entries');
      res.status(200).json({ status: 'successfull', viewAll, message: 'Retrieved ALL Entries' });
    } catch (err) { err; }
  }

  static async postEntry(req, res) {
    try {
    const { error } = validateEntry(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {
      title, message,
    } = req.body;

    // a proper user id would be passed when we have jwt
    const userid = 10;

    const saved = await dbInstance.any(`INSERT INTO entries (title, message, user_id)
    VALUES ('${title}', '${message}', '${userid}') `);

    res.status(201).json({ status: 'success', message: 'Saved your entry' });
  } catch(err) { err }
  }
}

export default Entries;
