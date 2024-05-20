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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.editCompleted = exports.newTask = exports.getTasks = void 0;
const task_1 = __importDefault(require("../models/task"));
function getTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tasks = yield task_1.default.findAll();
            if (tasks.length > 0)
                return tasks;
            else
                return { err: 'No task aviable' };
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getTasks = getTasks;
function newTask(title) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newTask = yield task_1.default.create({
                title,
            });
            if (newTask)
                return { state: 'Task created successfuly' };
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.newTask = newTask;
function editCompleted(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const completed = true;
            const task = yield task_1.default.findByPk(id);
            if (!task) {
                return { err: `Task ${id} not found` };
            }
            yield task.update({ completed });
            return task;
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.editCompleted = editCompleted;
function deleteUserById(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const task = yield task_1.default.findByPk(userId);
            if (!task) {
                return { err: `Task ${userId} not found` };
            }
            yield task.destroy();
            return { success: true };
        }
        catch (error) {
            console.error('Error al eliminar el usuario:', error);
            throw error;
        }
    });
}
exports.deleteUserById = deleteUserById;
