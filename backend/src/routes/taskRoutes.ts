import express from 'express';
import getTask from '../middlewares/getTasks';
import createTask from '../middlewares/createTask';
import completeTask from '../middlewares/completeTask';
import deleteTask from '../middlewares/deleteTask';
import { URL_BASE } from '../config/config';

const router = express.Router();

router.get(URL_BASE,getTask);
router.post(URL_BASE,createTask);
router.put(`${URL_BASE}/:id`,completeTask);
router.delete(`${URL_BASE}/:id`,deleteTask);
export = router;