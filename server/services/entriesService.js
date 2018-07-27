/* import debuggerconsole from 'debug';
import db from '../dbConnect/connect';

const mydebugger = debuggerconsole('app:startup');


class MYENTRIES {
  static async connection() {
    db.connect()
      .then(() => mydebugger('Connected to postgres...'))
      .catch(err => mydebugger('Could not connect', err));
  }
  static async getAll() {
    try {
      const { rows } = await db.query('SELECT id, title, message, date_added FROM entries');
      return rows;
    } catch (error) {
      return error;
    }
  }

  static async getOne(id) {
    try {
      const { rows } = await db.query(`SELECT id, title, message, date_added FROM entries WHERE id = '${id}'`);
      return rows;
    } catch (error) {
      return error;
    }
  }

  static async getTitle(id) {
    try {
      const { rows } = await db.query(`SELECT id, title, message, date_added FROM entries WHERE title = '${id}'`);
      return rows;
    } catch (error) {
      return error;
    }
  }

  static async saveEntry(body) {
    const {
      // eslint-disable-next-line
      title, message, user_id
    } = body;
    try {
      /*eslint-disable */
     // suppress all warnings between comments
      const { rowCount } = await db.query(`INSERT INTO entries (title, message, user_id)
      VALUES ('${title}', '${message}', '${user_id}');`);
      /* eslint-enable */
      if (rowCount === 1) {
        return this.getAll();
      }
    } catch (error) {
      return error;
    }
  }

  static async deleteOne(id) {
    try {
      const { rowCount } = await db.query(`DELETE FROM entries WHERE id = '${id}'`);
      if (rowCount === 1) {
        return this.getAll();
      }
    } catch (error) {
      return error;
    }
  }

  static async updateOne(body) {
    const {
      id, title, message
    } = body;
    try {
      const { rowCount } = await db.query(`UPDATE entries SET title = '${title}', message = '${message}'
        WHERE id = '${id}'`);
      if (rowCount === 1) {
        return this.getAll();
      }
    } catch (error) {
      return error;
    }
  }
}


export default MYENTRIES;
 */