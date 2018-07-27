import express from 'express';
import diary from '../controllers/myDiaryController';


const router = express.Router();
router.get('/api/v1/entries', diary.getEntry);
router.post('/api/v1/entries', diary.postEntry);

export default router;

