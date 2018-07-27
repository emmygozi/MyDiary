import express from 'express';
import diary from '../controllers/myDiaryController';


const router = express.Router();
router.get('/api/v1/entries', diary.getEntry);
router.get('/api/v1/entries/:id', diary.getOneEntry);
router.post('/api/v1/entries', diary.postEntry);
router.put('/api/v1/entries/:id', diary.updateEntry);
router.delete('/api/v1/entries/:id', diary.removeAnEntry);

export default router;

