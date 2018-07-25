import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('POST /', () => {
  // Define the happy path, and then in each test, we change
  // one parameter that clearly aligns with the name of the
  // test.
  let title;
  let message;
  let userid;

  const exec = async () => {
    try {
      return await chai.request(app)
        .post('/api/v1/entries')
        .send({
          title, message, userid
        });
    } catch (err) { throw err.message; }
  };

  beforeEach(() => {
    title = 'title1';
    message = 'a body message here';
    userid = 7;
  });

  it('should return a success status 200', async () => {
    try {
      const res = await exec();
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.have.length.above(2);
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

  it('should return a failure status for duplicate title entry 400', async () => {
    try {
      title = 'Second entry';

      const res = await exec();
      expect(res.status).to.equal(409);
    } catch (err) {
      throw err.message;
    }
  });
});

