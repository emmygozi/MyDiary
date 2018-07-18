import express from 'express';


const router = express.Router();

router.get('/api/v1/diary');
router.get('/api/v1/diary/:id');
router.post('/api/v1/diary');
router.put('/api/v1/diary/:id');
router.delete('/api/v1/diary/:id');

// router.use('/api/v1/diary', courses);

export default router;
