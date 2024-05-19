"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const getTasks_1 = __importDefault(require("../middlewares/getTasks"));
const createTask_1 = __importDefault(require("../middlewares/createTask"));
const completeTask_1 = __importDefault(require("../middlewares/completeTask"));
const deleteTask_1 = __importDefault(require("../middlewares/deleteTask"));
const config_1 = require("../config/config");
const router = express_1.default.Router();
router.get(config_1.URL_BASE, getTasks_1.default);
router.post(config_1.URL_BASE, createTask_1.default);
router.put(`${config_1.URL_BASE}/:id`, completeTask_1.default);
router.delete(`${config_1.URL_BASE}/:id`, deleteTask_1.default);
module.exports = router;
