import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('DELETE /:ID', () => {
  // Define the happy path, and then in each test, we change
  // one parameter that clearly aligns with the name of the
  // test.
  let urlId;

  const exec = async () => {
    try {
      return await chai.request(app)
        .delete(`/api/v1/diary/${urlId}`);
    } catch (err) { throw err; }
  };


  afterEach(() => {
    urlId = 1;
  });

  it('should return a failure status 400 is not a number', async () => {
    try {
      urlId = 'd';
      const res = await exec();
      expect(res.status).to.equal(400);
    } catch (err) {
      throw err;
    }
  });


  it('should return a failure status 404 if ID is not found', async () => {
    try {
      urlId = 100;

      const res = await exec();
      expect(res.status).to.equal(404);
    } catch (err) {
      throw err;
    }
  });

  it('should return a success status 200', async () => {
    try {
      const res = await exec();
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
    } catch (err) {
      throw err;
    }
  });
});

