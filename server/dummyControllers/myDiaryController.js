
import entry from '../dummyModels/entry';


class Entry {
  // we put underscore '_' in front of req to show that it is intentionally unused
  static getEntry(_req, res) {
    res.send(entry);
  }
}


export default Entry;
