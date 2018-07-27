import express from 'express';
import diary from '../dummyControllers/myDiaryController';


const router = express.Router();
router.get('/api/v1/entries', diary.getEntry);

export default router;
