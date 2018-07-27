import chai from 'chai';
import chaiHttp from 'chai-http';
import request from 'supertest';
import app from '../../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('POST /', () => {
  // Define the happy path, and then in each test, we change
  // one parameter that clearly aligns with the name of the
  // test.

  let name;
  let email;
  let mypassword;

  function makeid() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i += 1) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  beforeEach(() => {
    name = 'title1';
    email = 'something@yahoo.com';
    mypassword = '1222227278383';
  });

  it('should return a success status 200', (done) => {
    try {
      email = (`${makeid()}@yahoo.com`);

      request(app)
        .post('/api/v1/auth/signup')
        .send({
          name, email, mypassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure status for wrong string entry 400', (done) => {
    try {
      name = 'a';

      request(app)
        .post('/api/v1/auth/signup')
        .send({
          name, email, mypassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(400);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure status for duplicate title entry 409', (done) => {
    try {
      email = 'emmy8@e.comm';
      console.log(name);

      request(app)
        .post('/api/v1/auth/signup')
        .send({
          name, email, mypassword
        })
        .end((err, res) => {
          expect(res.status).to.equal(409);
        });
      done();
    } catch (err) {
      throw err.message;
    }
  });
});

