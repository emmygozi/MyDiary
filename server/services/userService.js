import db from '../dbConnect/connect';

db.connection();


class ALLUSERS {
  static async connection() {
    db.connect()
      .then(() => mydebugger('Connected to postgres...'))
      .catch(err => mydebugger('Could not connect', err));
  }
  static async getAll() {
    try {
      const { rows } = await db.query('SELECT name, email, date_added FROM users');
      return rows;
    } catch (error) {
      return error;
    }
  }

  static async loginUser(email) {
    try {
      const { rows, rowCount } = await db.query(`SELECT id, name, email FROM users WHERE email = '${email}'`);
      console.log(rows);
      if (rowCount === 1) {
        return rows;
      }
    } catch (error) {
      return error;
    }
  }

  static async saveUser(body) {
    const {
      name, email, mypassword
    } = body;
    try {
      const { rowCount } = await db.query(`INSERT INTO users (name, email, mypassword)
      VALUES ('${name}', '${email}', '${mypassword}');`);
      console.log(rowCount);
      if (rowCount === 1) {
        const { rows } = await db.query('SELECT id, name, email, date_added FROM users');
        console.log(rows);
        return rows;
      }
    } catch (error) {
      return error;
    }
  }
}

export default ALLUSERS;
