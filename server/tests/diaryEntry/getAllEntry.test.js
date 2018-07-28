import chai from 'chai';
import chaiHttp from 'chai-http';
import genrateAuthToken from '../../helpers/generateAuthToken';
import app from '../../index';

chai.use(chaiHttp);
const { expect } = chai;

// Tests user entries
describe('GET /', () => {
  const uniqueId = 40;

  it('should return a success status 200', async () => {
    try {
      const res = await chai.request(app)
        .get('/api/v1/entries')
        .set('x-auth-token', genrateAuthToken(uniqueId));
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
    } catch (err) {
      throw err.message;
    }
  });
});

