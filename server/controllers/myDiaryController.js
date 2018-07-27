import dbWaitConnect from 'bluebird';
import debuggerconsole from 'debug';
import config from 'config';
import entry from '../sqlStatements/entry';

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
    try{
    const viewAll = await dbInstance.any('SELECT id, title, message, date_added FROM entries');
    res.status(200).json({ status: 'successfull', viewAll, message: 'Retrieved ALL Entries' });
  }catch(err){ err }
  }
}

export default Entries;
