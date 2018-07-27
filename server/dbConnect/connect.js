import config from 'config';
import { Client } from 'pg';

const connectionString = config.get('db');


const client = new Client({
  connectionString,
});


export default client;
