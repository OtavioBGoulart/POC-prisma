import { Request, Response } from "express";
import { id } from "../protocols/idTask";
import { task } from "../protocols/task";
import { createTask, getTaskById, getTasksDB, removeTasks } from "../repositories/taskRepositories";

export async function addTask(req: Request, res: Response) {

    const { taks, urgency } = req.body as task;

    try {
        const result = await createTask(taks, urgency);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getTasks(req: Request, res: Response) {
    
    try {
        const result = await getTasksDB();
        if (result.rowCount === 0) return res.sendStatus(404);
        res.status(200).send(result.rows);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function deleteTask(req: Request, res : Response) {
    
    const { id } = req.params

    try {   
        const taskExist = await getTaskById(id)
        if (taskExist.rowCount === 0) return res.sendStatus(404);
        await removeTasks(id);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}