import express from 'express';
import userRoutes from './routes/User.js'; 
import { connectDb } from './config/Db.js';

const port = 3000;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use defined routes from UserRoutes.js
app.use('/api', userRoutes);

app.listen(port, () => {
    connectDb('mongodb://localhost:27017/PMS')
    console.log(`Server is running on port ${port}`);
});
