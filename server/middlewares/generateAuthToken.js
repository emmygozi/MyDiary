import config from 'config';
import jwt from 'jsonwebtoken';

const generateAuthToken = (name, email) => {
  const token = jwt.sign({ name, email }, config.get('jwtPrivateKey'));

  return token;
};
export default generateAuthToken;
