"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const getTasks_1 = __importDefault(require("../middlewares/getTasks"));
const createTask_1 = __importDefault(require("../middlewares/createTask"));
const completeTask_1 = __importDefault(require("../middlewares/completeTask"));
const deleteTask_1 = __importDefault(require("../middlewares/deleteTask"));
const router = express_1.default.Router();
router.get('/tasks', getTasks_1.default);
router.post('/tasks', createTask_1.default);
router.put('/tasks/:id', completeTask_1.default);
router.delete('/tasks/:id', deleteTask_1.default);
module.exports = router;
