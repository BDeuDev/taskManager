"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const getTasks_1 = __importDefault(require("../middlewares/getTasks"));
const createTask_1 = __importDefault(require("../middlewares/createTask"));
const completeTask_1 = __importDefault(require("../middlewares/completeTask"));
const deleteTask_1 = __importDefault(require("../middlewares/deleteTask"));
const config_1 = require("../config/config");
const database_1 = __importDefault(require("../config/database"));
const router = express_1.default.Router();
router.get(config_1.URL_BASE, getTasks_1.default);
router.post(config_1.URL_BASE, createTask_1.default);
router.put(`${config_1.URL_BASE}/:id`, completeTask_1.default);
router.delete(`${config_1.URL_BASE}/:id`, deleteTask_1.default);
router.get('/test-connection', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.default.authenticate();
        console.log('Connection has been established successfully.');
        res.status(200).send('Database connection successful');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
        res.status(500).send('Database connection failed');
    }
}));
module.exports = router;
