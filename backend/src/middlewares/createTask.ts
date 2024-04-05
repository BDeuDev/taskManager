import {newTask} from "../server/task_server";
import { Request, Response } from 'express';

export default async function createTask(req:Request,res:Response) {
    try {
        const {title,completed} =req.body
        await newTask(title,completed)
            .then(result => res.status(200).json(result))
            .catch(err => res.status(400).json(err))
    } catch (error) {
        res.status(500).json(error)
    }
}