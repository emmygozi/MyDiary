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
    if (!token) return res.status(401).json({ status: 'Failed', message: 'Access denied! No token provided' });

    try {
      const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
      req.decodeUser = decoded; // if token is successful, we would have req.decodedUser object.
      next();
    } catch (ex) {
      res.status(400).json({ status: 'Failed', message: 'Invalid token!' });
    }
  }
}
export default Auth;
