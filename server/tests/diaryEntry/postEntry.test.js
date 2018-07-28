import chai from 'chai';
import chaiHttp from 'chai-http';
import genrateAuthToken from '../../helpers/generateAuthToken';
import app from '../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('POST /', () => {
  // Define the happy path, and then in each test, we change
  // one parameter that clearly aligns with the name of the
  // test.
  let title;
  let message;
  const uniqueId = 40;

  const exec = async () => {
    try {
      return await chai.request(app)
        .post('/api/v1/entries')
        .set('x-auth-token', genrateAuthToken(uniqueId))
        .send({
          title, message
        });
    } catch (err) { throw err.message; }
  };

  beforeEach(() => {
    title = 'title1';
    message = 'a body message here';
  });

  it('should return a success status 201', async () => {
    try {
      const res = await exec();
      expect(res.status).to.equal(201);
      expect(res.body).to.be.an('object');
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure status for wrong string entry 400', async () => {
    try {
      title = 'a';

      const res = await exec();
      expect(res.status).to.equal(400);
    } catch (err) {
      throw err.message;
    }
  });
});

