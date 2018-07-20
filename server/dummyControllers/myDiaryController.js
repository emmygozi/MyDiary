import entry from '../dummyModels/entry';


class Entry {
  // we put underscore '_' in front of req to show that it is intentionally unused
  static getEntry(_req, res) {
    res.send(entry);
  }

  static removeAnEntry(req, res) {
    // strict comparison is not suitable here to find out if update ID is a number
    // eslint-disable-next-line
    if (req.params.id != parseInt(req.params.id, 10)) return res.status(400).send('Given ID is not a number!');

    const myEntryIndex = entry.findIndex(c => c.id === parseInt(req.params.id, 10));

    // findIndex returns -1 if idex is not found
    if (myEntryIndex === -1) return res.status(404).send('The entry with the given ID was not found!');

    entry.splice(myEntryIndex, 1);
    res.send(entry);
  }


  static getOneEntry(req, res) {
    // eslint-disable-next-line
    if (req.params.id != parseInt(req.params.id, 10)) return res.status(400)
      .send('Given ID is not a number!');


    const myEntryIndex = entry.findIndex(c => c.id === parseInt(req.params.id, 10));
    if (myEntryIndex === -1) return res.status(404).send('The entry with th given ID was not found!');

    res.send(entry[myEntryIndex]);
  }
}

export default Entry;
