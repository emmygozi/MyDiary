import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';
import genrateAuthToken from '../../../middlewares/generateAuthToken';
import app from '../../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('PUT /:ID', () => {
  // Define the happy path, and then in each test, we change
  // one parameter that clearly aligns with the name of the
  // test.
  const name = 'Clichy';
  const mail = 'emmy8@e.comm';

  let title;
  let message;
  /*eslint-disable */
  let user_id;
  let urlId;

  function makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }


  beforeEach(() => {
    title = 'title1';
    message = 'a body message here';
    user_id = 5;
  });

  afterEach(() => {
    urlId = 2;
  });
 /* eslint-enable */
  it('should return a success status 200', (done) => {
    try {
      urlId = 5;
      title = makeid();

      request(app)
        .put(`/api/v1/entries/${urlId}`)
        .set('x-auth-token', genrateAuthToken(name, mail))
        .send({
          title, message, user_id
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure is not a number', (done) => {
    try {
      urlId = 'd';

      request(app)
        .put(`/api/v1/entries/${urlId}`)
        .set('x-auth-token', genrateAuthToken(name, mail))
        .send({
          title, message, user_id
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure status 404 if ID is not found', (done) => {
    try {
      urlId = 10000;

      request(app)
        .put(`/api/v1/entries/${urlId}`)
        .set('x-auth-token', genrateAuthToken(name, mail))
        .send({
          title, message, user_id
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });


  it('should return a failure status for wrong string entry 400', (done) => {
    try {
      title = 'a';

      request(app)
        .put(`/api/v1/entries/${urlId}`)
        .set('x-auth-token', genrateAuthToken(name, mail))
        .send({
          title, message, user_id
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });
});

