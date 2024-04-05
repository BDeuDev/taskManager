import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use('/',taskRoutes)
app.listen(3000, () => console.log('Server is running on port 3000'));