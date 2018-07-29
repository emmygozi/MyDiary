import chai from 'chai';
import chaiHttp from 'chai-http';
import genrateAuthToken from '../../helpers/generateAuthToken';
import app from '../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('GET /:ID', () => {
  const uniqueId = 40;

  it('should return a success status 200', async () => {
    try {
      const res = await chai.request(app)
        .get('/api/v1/entries/50')
        .set('x-auth-token', genrateAuthToken(uniqueId));
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure status of 400', async () => {
    try {
      const res = await chai.request(app)
        .get('/api/v1/entries/a')
        .set('x-auth-token', genrateAuthToken(uniqueId));
      expect(res.status).to.equal(400);
    } catch (err) {
      throw err.message;
    }
  });


  it('should return a failure status of 404', async () => {
    try {
      const res = await chai.request(app)
        .get('/api/v1/entries/50000')
        .set('x-auth-token', genrateAuthToken(uniqueId));
      expect(res.status).to.equal(404);
    } catch (err) {
      throw err.message;
    }
  });
});
