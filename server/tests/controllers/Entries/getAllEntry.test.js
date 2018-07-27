import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';
import genrateAuthToken from '../../../middlewares/generateAuthToken';
import app from '../../../index';

chai.use(chaiHttp);
const { expect } = chai;


// Tests user entries
describe('GET /', () => {
  it('should return a success status 200', (done) => {
    const name = 'Clichy';
    const mail = 'emmy8@e.comm';
    try {
      request(app)
        .get('/api/v1/entries')
        .set('x-auth-token', genrateAuthToken(name, mail))
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.have.length.above(0);
          expect(res.body[0]).to.have.any.keys('id', 'title');
          expect(res.body[0]).to.be.an('object');
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });

  it('should return Invalid token status 400', (done) => {
    try {
      request(app)
        .get('/api/v1/entries')
        .set('x-auth-token', 'xxxxxxxxxxxxxxxx')
        .end((err, res) => {
          expect(res.status).to.equal(400);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });

  it('should return No access token status 401', (done) => {
    try {
      request(app)
        .get('/api/v1/entries')
        .set('x-auth-token', '')
        .end((err, res) => {
          expect(res.status).to.equal(401);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });
});

