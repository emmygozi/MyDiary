import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';
import genrateAuthToken from '../../../middlewares/generateAuthToken';
import app from '../../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('DELETE /:ID', () => {
  // Define the happy path, and then in each test, we change
  // one parameter that clearly aligns with the name of the
  // test.
  const name = 'Clichy';
  const mail = 'emmy8@e.comm';

  let urlId;


  afterEach(() => {
    urlId = 1;
  });

  it('should return a failure status 400 is not a number', (done) => {
    try {
      urlId = 'd';
      request(app)
        .delete(`/api/v1/entries/${urlId}`)
        .set('x-auth-token', genrateAuthToken(name, mail))
        .end((err, res) => {
          expect(res.status).to.equal(400);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });


  it('should return a failure status 404 if ID is not found', (done) => {
    try {
      urlId = 500;
      request(app)
        .delete(`/api/v1/entries/${urlId}`)
        .set('x-auth-token', genrateAuthToken(name, mail))
        .end((err, res) => {
          expect(res.status).to.equal(404);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });

  /* it('should return a success status 200', async () => {
    try {
      const res = await exec();
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
    } catch (err) {
      throw err.message;
    }
  }); */
});

