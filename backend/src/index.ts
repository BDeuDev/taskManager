import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import taskRoutes from './routes/taskRoutes';
import { URL_BLUEPRINT } from './config/config';

const app = express();


app.use(express.json());
app.use(cors());
app.use(URL_BLUEPRINT,taskRoutes);
app.listen(3000, () => console.log('Server is running on port 3000'));