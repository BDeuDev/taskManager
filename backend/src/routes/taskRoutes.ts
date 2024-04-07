import express from 'express';
import getTask from '../middlewares/getTasks';
import createTask from '../middlewares/createTask';
import completeTask from '../middlewares/completeTask';
import deleteTask from '../middlewares/deleteTask';

const router = express.Router();

router.get('/tasks',getTask)
router.post('/tasks',createTask)
router.put('/tasks/:id',completeTask)
router.delete('/tasks/:id',deleteTask)
export = router;