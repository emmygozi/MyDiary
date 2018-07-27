import express from 'express';
import myEntries from '../controllers/entriesController';
import myUsers from '../controllers/usersController';
import Auth from '../middlewares/Auth';


const router = express.Router();


router.get('/api/v1/entries', Auth.auth, myEntries.getEntry);
router.get('/api/v1/entries/:id', Auth.auth, myEntries.getOneEntry);
router.post('/api/v1/entries', Auth.auth, myEntries.postEntry);
router.delete('/api/v1/entries/:id', Auth.auth, myEntries.removeAnEntry);
router.put('/api/v1/entries/:id', Auth.auth, myEntries.updateEntry);

router.post('/api/v1/auth/signup', myUsers.signup);
router.post('/api/v1/auth/login', myUsers.login);


export default router;
