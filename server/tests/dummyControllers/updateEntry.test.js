import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('PUT /:ID', () => {
  // Define the happy path, and then in each test, we change
  // one parameter that clearly aligns with the name of the
  // test.
  let title;
  let message;
  let userid;
  let urlId;

  const exec = async () => {
    try {
      return await chai.request(app)
        .put(`/api/v1/entries/${urlId}`)
        .send({
          title, message, userid
        });
    } catch (err) { throw err.message; }
  };

  beforeEach(() => {
    title = 'title1';
    message = 'a body message here';
    userid = 4;
  });

  afterEach(() => {
    urlId = 2;
  });

  it('should return a success status 200', async () => {
    try {
      urlId = 2;
      const res = await exec();
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure is not a number', async () => {
    try {
      urlId = 'd';
      const res = await exec();
      expect(res.status).to.equal(401);
    } catch (err) {
      throw err.message;
    }
  });

  it('should return a failure status 404 if ID is not found', async () => {
    try {
      urlId = 100;
      const res = await exec();
      expect(res.status).to.equal(404);
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

