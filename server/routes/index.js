import express from 'express';
import diary from '../controllers/myDiaryController';
import myUsers from '../controllers/userController';
import Auth from '../middlewares/Auth';


const router = express.Router();
router.get('/entries', Auth.auth, diary.getEntry);
router.get('/entries/:id', Auth.auth, diary.getOneEntry);
router.post('/entries', Auth.auth, diary.postEntry);
router.put('/entries/:id', Auth.auth, diary.updateEntry);
router.delete('/entries/:id', Auth.auth, diary.removeAnEntry);

router.post('/auth/signup', myUsers.signup);
router.post('/auth/login', myUsers.login);


export default router;

