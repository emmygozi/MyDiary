import config from 'config';
import jwt from 'jsonwebtoken';

const generateAuthToken = (id) => {
  const token = jwt.sign({ id }, config.get('jwtPrivateKey'), { expiresIn: 86400 });

  return token;
};
export default generateAuthToken;
