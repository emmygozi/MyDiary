import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.use(chaiHttp);
const { expect } = chai;

// Tests user entries
describe('AUTH /', () => {
  it('should return invalid token', async () => {
    try {
      const res = await chai.request(app)
        .get('/api/v1/entries')
        .set('x-auth-token', 'xxxxxxxxxxxxxxxx');
      expect(res.status).to.equal(400);
      expect(res.body).to.be.an('object');
    } catch (err) {
      throw err.message;
    }
  });

  it('Acess denied. No token provided', async () => {
    try {
      const res = await chai.request(app)
        .get('/api/v1/entries')
        .set('x-auth-token', '');
      expect(res.status).to.equal(401);
      expect(res.body).to.be.an('object');
    } catch (err) {
      throw err.message;
    }
  });
});

