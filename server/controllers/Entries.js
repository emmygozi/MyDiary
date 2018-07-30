import dbWaitConnect from 'bluebird';
import debuggerconsole from 'debug';
import config from 'config';
import validateEntry from '../helpers/validateEntry';

const mydebugger = debuggerconsole('app:startup');
mydebugger(config.get('db'));

const tryConnect = {
  promiseLib: dbWaitConnect
};
const promisedConnection = require('pg-promise')(tryConnect);

const dbInstance = promisedConnection(config.get('db'));

class Entries {
  // we put underscore '_' in front of req to show that it is intentionally unused
  static async getEntry(req, res) {
    console.log(req.decodeUser.id);
    const myId = req.decodeUser.id;

    const viewAll = await dbInstance.any(`SELECT id, title, message, date_added FROM entries WHERE user_id = '${myId}'`);
    res.status(200).json({ status: 'successfull', viewAll, message: 'Retrieved ALL Entries' });
  }

  static async postEntry(req, res) {
    const { error } = validateEntry(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {
      title, message,
    } = req.body;

    const myId = req.decodeUser.id;


    await dbInstance.result(`INSERT INTO entries (title, message, user_id)
    VALUES ('${title}', '${message}', '${myId}') `);

    res.status(201).json({ status: 'success', message: 'Saved your entry' });
  }

  static async updateEntry(req, res) {
    if (Number(req.params.id) !== parseInt(req.params.id, 10)) {
      return res.status(401).json({ status: 'Failed', message: 'Given ID is not a number' });
    }

    const { error } = validateEntry(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {
      title, message
    } = req.body;

    const myId = req.decodeUser.id;
    const myUpdateId = req.params.id;

    const updated = await dbInstance.result(`UPDATE entries SET title = '${title}', message = '${message}'
    WHERE user_id = '${myId}' AND id = ${myUpdateId}`);

    if (updated.rowCount === 0) {
      return res.status(404)
        .json({ status: 'Failed', message: 'Given ID does not exist' });
    }
    res.status(200)
      .json({ status: 'successfull', message: 'Entry is sucessfully updated!' });
  }

  static async getOneEntry(req, res) {
    if (Number(req.params.id) !== parseInt(req.params.id, 10)) {
      return res.status(400).json({ status: 'Failed', message: 'Given ID is not a number' });
    }

    const myId = req.decodeUser.id;
    const getId = req.params.id;

    const getOne = await dbInstance.result(`SELECT id, title,
     message, date_added FROM entries WHERE id = '${getId}'  AND user_id = '${myId}'`);

    if (getOne.rowCount === 0) {
      return res.status(404)
        .json({ status: 'Failed', message: 'Given ID does not exist' });
    }
    const { rows } = getOne;
    const rowIndex = rows[0];

    return res.status(200)
      .json({ status: 'successfull', rowIndex, message: 'Sucess getting one entry!' });
  }

  static async removeAnEntry(req, res) {
    if (Number(req.params.id) !== parseInt(req.params.id, 10)) {
      return res.status(400).json({ status: 'Failed', message: 'Given ID is not a number' });
    }

    const myId = req.decodeUser.id;
    const deleteId = req.params.id;

    const deleted = await dbInstance.result(`DELETE FROM entries
     WHERE id = '${deleteId}'  AND user_id = '${myId}'`);
    if (deleted.rowCount === 0) {
      return res.status(404)
        .json({ status: 'Failed', message: 'Given ID does not exist' });
    }
    return res.status(200)
      .json({ status: 'successfull', message: 'Entry is deleted!' });
  }
}

export default Entries;
