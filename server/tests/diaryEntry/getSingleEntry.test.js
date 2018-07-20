import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.use(chaiHttp);
const { expect } = chai;


describe('GET /:ID', () => {
  it('should return a success status 200', async () => {
    try {
      const res = await chai.request(app)
        .get('/api/v1/diary/2');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.any.keys('id', 'title');
    } catch (err) {
      throw err;
    }
  });

  it('should return a failure status of 400', async () => {
    try {
      const res = await chai.request(app)
        .get('/api/v1/diary/a');
      expect(res.status).to.equal(400);
    } catch (err) {
      throw err;
    }
  });


  it('should return a failure status of 404', async () => {
    try {
      const res = await chai.request(app)
        .get('/api/v1/diary/50');
      expect(res.status).to.equal(404);
    } catch (err) {
      throw err;
    }
  });
});
