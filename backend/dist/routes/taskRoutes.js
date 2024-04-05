"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const getTasks_1 = __importDefault(require("../middlewares/getTasks"));
const createTask_1 = __importDefault(require("../middlewares/createTask"));
const completeTask_1 = __importDefault(require("../middlewares/completeTask"));
const router = express_1.default.Router();
router.get('/tasks', getTasks_1.default);
router.post('/tasks', createTask_1.default);
router.put('/tasks', completeTask_1.default);
module.exports = router;
