import chai from 'chai';
import chaiHttp from 'chai-http';
import genrateAuthToken from '../../helpers/generateAuthToken';
import app from '../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('DELETE /:ID', () => {
  // Define the happy path, and then in each test, we change
  // one parameter that clearly aligns with the name of the
  // test.
  let urlId;
  const uniqueId = 40;

  const exec = async () => {
    try {
      return await chai.request(app)
        .delete(`/api/v1/entries/${urlId}`)
        .set('x-auth-token', genrateAuthToken(uniqueId));
    } catch (err) { throw err.message; }
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
      throw err.message;
    }
  });


  it('should return a failure status 404 if ID is not found', async () => {
    try {
      urlId = 1000000;

      const res = await exec();
      expect(res.status).to.equal(404);
    } catch (err) {
      throw err.message;
    }
  });
});

