import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import taskRoutes from './routes/taskRoutes';


const app = express();

app.use(express.json());
app.use(cors());
app.use('/api',taskRoutes)
app.listen(3000, () => console.log('Server is running on port 3000'));