import validateEntry from '../middlewares/validateEntry';
import dummyModels from '../dummyModels/entry';

class Entries {
  // we put underscore '_' in front of req to show that it is intentionally unused
  static getEntry(_req, res) {
    res.send(dummyModels);
  }
}

export default Entries;
