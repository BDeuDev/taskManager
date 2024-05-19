import express,{Request,Response} from 'express';
import getTask from '../middlewares/getTasks';
import createTask from '../middlewares/createTask';
import completeTask from '../middlewares/completeTask';
import deleteTask from '../middlewares/deleteTask';
import { URL_BASE } from '../config/config';
import sequelize from '../config/database';

const router = express.Router();

router.get(URL_BASE,getTask);
router.post(URL_BASE,createTask);
router.put(`${URL_BASE}/:id`,completeTask);
router.delete(`${URL_BASE}/:id`,deleteTask);
router.get('/test-connection', async (req: Request, res: Response) => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
      res.status(200).send('Database connection successful');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      res.status(500).send('Database connection failed');
    }
  });
export = router;