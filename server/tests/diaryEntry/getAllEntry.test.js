import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

chai.use(chaiHttp);
const { expect } = chai;

// Tests user entries
describe('GET /', () => {
  it('should return a success status 200', async () => {
    try {
      const res = await chai.request(app)
        .get('/api/v1/diary');
      expect(res.status).to.equal(200);
      expect(res.body).to.be.an('array');
      expect(res.body).to.have.length.above(0);
      expect(res.body[0]).to.have.any.keys('id', 'title');
      expect(res.body[0]).to.be.an('object');
    } catch (err) {
      throw err.message;
    }
  });
});

