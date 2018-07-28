import jwt from 'jsonwebtoken';
import config from 'config';

/**
 * @class Auth
 */
class Auth {
  /**
       * @desc protect routes
       * @returns {object} json
       * @param {object} req object
       * @param {object} res object
       * @param {object} next object
       */
  static auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Acess denied. No token provided');

    try {
      const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
      req.decodedUser = decoded; // if token is successful, we would have req.user object.
      next();
    } catch (ex) {
      res.status(400).send('Invalid Token');
    }
  }
}
export default Auth;
