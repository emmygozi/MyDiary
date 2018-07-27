import express from 'express';
import myUsers from '../controllers/Users';


const router = express.Router();


router.post('/api/v1/auth/signup', myUsers.signup);


export default router;
