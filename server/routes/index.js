import express from 'express';
import diary from '../controllers/myDiaryController';
import myUsers from '../controllers/userController';
import Auth from '../middlewares/Auth';


const router = express.Router();
router.get('/api/v1/entries', Auth.auth, diary.getEntry);
router.get('/api/v1/entries/:id', Auth.auth, diary.getOneEntry);
router.post('/api/v1/entries', Auth.auth, diary.postEntry);
router.put('/api/v1/entries/:id', Auth.auth, diary.updateEntry);
router.delete('/api/v1/entries/:id', Auth.auth, diary.removeAnEntry);

router.post('/api/v1/auth/signup', myUsers.signup);
router.post('/api/v1/auth/login', myUsers.login);


export default router;

