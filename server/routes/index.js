import express from 'express';
import diary from '../controllers/myDiaryController';


const router = express.Router();
router.get('/api/v1/entries', diary.getEntry);

export default router;

