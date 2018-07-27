import config from 'config';
import { Client } from 'pg';

const connectionString = config.get('db');
const client = new Client({
  connectionString,
});

class MYDATA {
  static async connection() {
    client.connect()
      .then(() => console.log('Connected to postgres...'))
      .catch(err => console.log('Could not connect', err));
  }
}


export default MYDATA;
