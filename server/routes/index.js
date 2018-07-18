import express from 'express';
import diary from '../dummyControllers/myDiaryController';


const router = express.Router();

router.get('/api/v1/diary', diary.getEntry);
router.get('/api/v1/diary/:id', diary.getOneEntry);
router.post('/api/v1/diary', diary.postEntry);
router.put('/api/v1/diary/:id', diary.updateEntry);
router.delete('/api/v1/diary/:id', diary.removeAnEntry);


export default router;
