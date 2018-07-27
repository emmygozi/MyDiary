import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';
import genrateAuthToken from '../../../middlewares/generateAuthToken';
import app from '../../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('GET /:ID', () => {
  const name = 'Clichy';
  const mail = 'emmy8@e.comm';
  const num1 = 2;
  const num2 = 500;


  it('should return a success status 200', (done) => {
    try {
      request(app)
        .get(`/api/v1/entries/${num1}`)
        .set('x-auth-token', genrateAuthToken(name, mail))
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.any.keys('id', 'title');
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure status of 400', (done) => {
    try {
      request(app)
        .get('/api/v1/entries/a')
        .set('x-auth-token', genrateAuthToken(name, mail))
        .end((err, res) => {
          expect(res.status).to.equal(400);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });


  it('should return a failure status of 404', (done) => {
    try {
      request(app)
        .get(`/api/v1/entries/${num2}`)
        .set('x-auth-token', genrateAuthToken(name, mail))
        .end((err, res) => {
          expect(res.status).to.equal(404);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });
});
