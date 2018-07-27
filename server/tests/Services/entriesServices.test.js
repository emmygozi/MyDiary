import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import entryServices from '../../services/entriesService';

chai.use(chaiHttp);
const { expect } = chai;


describe('GET /', () => {
  const mystuff = [
    {
      id: 6,
      title: 'sixth entry',
      message: 'This is our sixth entry message that we are using for this diary',
      date_added: '2018-07-26T09:48:43.571Z'
    },
    {
      id: 5,
      title: 'updated 5',
      message: 'This is our updated five entry message that we are using for this diary',
      date_added: '2018-07-26T09:48:11.046Z'
    },
    {
      id: 7,
      title: 'seventh entry',
      message: 'This is our seventhe entry message that we are using for this diary',
      date_added: '2018-07-26T21:17:36.582Z'
    }
  ];
  it('should return a success status 200', async () => {
    const name = 'Clichy';
    const mail = 'emmy8@e.comm';
    try {
      const res = await sinon.stub(entryServices, 'getAll').callsFake(() => mystuff);
      expect(res).to.be.an('array');
      expect(res).to.have.length.above(0);
      expect(res[0]).to.have.any.keys('id', 'title');
      expect(res[0]).to.be.an('object');
    } catch (err) {
      throw err.message;
    }
  });
});
