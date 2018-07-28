import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('POST /', () => {
  // Define the happy path, and then in each test, we change
  // one parameter that clearly aligns with the name of the
  // test.
  let email;
  let mypassword;

  const exec = async () => {
    try {
      return await chai.request(app)
        .post('/api/v1/auth/login')
        .send({
          email, mypassword
        });
    } catch (err) { throw err.message; }
  };

  beforeEach(() => {
    email = 'qwedfddrfddkiyt@g.com';
    mypassword = '123456';
  });

  it('should return a string for success', async () => {
    try {
      const res = await exec();
      expect(res.status).to.equal(200);
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure status for wrong string entry 400', async () => {
    try {
      email = 'a';

      const res = await exec();
      expect(res.status).to.equal(400);
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure status for invalid string entry 400', async () => {
    try {
      email = 'qbbbepsam099iermkpwkpwedfddrfddkiyt@g.com';
      mypassword = '123456';

      const res = await exec();
      expect(res.status).to.equal(400);
    } catch (err) {
      throw err.message;
    }
  });
});

