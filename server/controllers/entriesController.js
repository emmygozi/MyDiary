import diaryEntries from '../services/entriesService';
import validateEntry from '../middlewares/validateEntryDb';

diaryEntries.connection();

class Entry {
  // we put underscore '_' in front of req to show that it is intentionally unused
  static async getEntry(_req, res) {
    return res.send(await diaryEntries.getAll());
  }

  static async postEntry(req, res) {
    const { error } = validateEntry(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const {
      // eslint-disable-next-line
      title, message, user_id,
    } = req.body;

    const anEntry = {
      title,
      message,
      user_id
    };

    const getArray = await diaryEntries.getAll();
    const foundEntry = getArray.find(myentry =>
      (myentry.title.toLowerCase() === title.toLowerCase()));

    if (foundEntry) {
      return res.status(409).send(`An entry with title '${title}' is already in the entry options`);
    }
    const saved = await diaryEntries.saveEntry(anEntry);
    res.send(saved);
  }

  static async removeAnEntry(req, res) {
    if (Number(req.params.id) !== parseInt(req.params.id, 10)) {
      return res.status(400).send('Given ID is not a number!');
    }

    const getArray = await diaryEntries.getAll();
    const myEntryIndex = getArray.findIndex(c => c.id === parseInt(req.params.id, 10));

    // findIndex returns -1 if index is not found
    if (myEntryIndex === -1) return res.status(404).send('The entry with the given ID was not found!');

    const deleted = await diaryEntries.deleteOne(req.params.id);
    res.send(deleted);
  }

  static async updateEntry(req, res) {
    if (Number(req.params.id) !== parseInt(req.params.id, 10)) {
      return res.status(401).send('Given ID is not a number!');
    }


    const getArray = await diaryEntries.getAll();
    const myEntry = getArray.find(c => c.id === parseInt(req.params.id, 10));
    if (!myEntry) return res.status(404).send('The entry with the given ID was not found!');
console.log(myEntry);
    const { error } = validateEntry(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    myEntry.title = req.body.title;
    myEntry.message = req.body.message;

    res.send(await diaryEntries.updateOne(myEntry));
  }

  static async getOneEntry(req, res) {
    if (Number(req.params.id) !== parseInt(req.params.id, 10)) {
      return res.status(400).send('Given ID is not a number!');
    }

    const getArray = await diaryEntries.getAll();
    const myEntryIndex = getArray.findIndex(c => c.id === parseInt(req.params.id, 10));
    if (myEntryIndex === -1) return res.status(404).send('The entry with th given ID was not found!');

    res.send(await diaryEntries.getOne(req.params.id));
  }
}


export default Entry;
