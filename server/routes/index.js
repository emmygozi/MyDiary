import express from 'express';
import diary from '../controllers/myDiaryController';


const router = express.Router();
router.get('/api/v1/entries', diary.getEntry);
router.post('/api/v1/entries', diary.postEntry);
router.put('/api/v1/entries/:id', diary.updateEntry);

export default router;

