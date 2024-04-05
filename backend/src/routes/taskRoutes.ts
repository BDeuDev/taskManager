import express from 'express';
import getTask from '../middlewares/getTasks';
import createTask from '../middlewares/createTask';
import completeTask from '../middlewares/completeTask';

const router = express.Router();

router.get('/tasks',getTask)
router.post('/tasks',createTask)
router.put('/tasks',completeTask)

export = router;