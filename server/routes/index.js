import express from 'express';
import diary from '../dummyControllers/myDiaryController';


const router = express.Router();

router.get('/api/v1/diary', diary.getEntry);
router.get('/api/v1/diary/:id', diary.getOneEntry);
router.delete('/api/v1/diary/:id', diary.removeAnEntry);

export default router;
