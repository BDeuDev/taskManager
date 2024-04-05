import {editCompleted} from "../server/task_server";
import { Request, Response } from 'express';

export default async function completeTask(req:Request,res:Response) {
    try {
        const {title,completed} = req.body;
        await editCompleted(title)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err))
    } catch (error) {
        res.status(500).json(error);
    }
}