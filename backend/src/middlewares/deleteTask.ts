import {deleteUserById} from "../server/task_server";
import { Request, Response } from 'express';

export default async function deleteTask(req:Request,res:Response) {
    try {
        const id = parseInt(req.params.id)
        console.log(id)
      await deleteUserById(id)
        .then( tasks => res.status(200).json(tasks))
        .catch(err => res.status(401).json(err))
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}