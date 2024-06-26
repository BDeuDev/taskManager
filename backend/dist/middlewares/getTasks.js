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
Object.defineProperty(exports, "__esModule", { value: true });
const task_server_1 = require("../server/task_server");
function getTask(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, task_server_1.getTasks)()
                .then(tasks => res.status(200).json(tasks))
                .catch(err => res.status(401).json(err));
        }
        catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    });
}
exports.default = getTask;
