import {getTasks} from "../server/task_server";
import { Request, Response } from 'express';

export default async function getTask(req:Request,res:Response) {
    try {
      await getTasks()
        .then( tasks => res.status(200).json(tasks))
        .catch(err => res.status(401).json(err))
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}