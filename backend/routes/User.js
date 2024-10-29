import express from 'express';
import { registerUser, loginUser } from '../controller/User.js'; // Adjust the path based on your folder structure

const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
