import entry from '../dummyModels/entry';
import validateEntry from '../middlewares/validateEntry';


class Entry {
  // we put underscore '_' in front of req to show that it is intentionally unused
  static getEntry(_req, res) {
    res.send(entry);
  }


  static postEntry(req, res) {
    const { error } = validateEntry(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {
      title, message, userid,
    } = req.body;
    const id = entry[entry.length - 1].id + 1;

    const anEntry = {
      id,
      title,
      message,
      userid
    };

    const foundEntry = entry.find(myentry =>
      (myentry.title.toLowerCase() === title.toLowerCase()));

    if (foundEntry) return res.status(409).send(`An entry with title '${title}' is already in the entry options`);
    entry.push(anEntry);
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
