import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authMiddleware";
import { task, taskEntity } from "../protocols/task";
import {  createTaskService, deleteTaskService, getTasksService, updateTaskService } from "../services/tasksService";

export async function addTask(req: AuthenticatedRequest, res: Response) {

    const {task, urgency, time} = req.body as task;
    const id = req.userId

    try {
        await createTaskService(task, urgency, time, id);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getTasks(req: AuthenticatedRequest, res: Response) {
    const id = req.userId;

    try {
        //const tasksCount = countTimeService(id)
        const tasks = await getTasksService(id)
        res.status(200).send(tasks);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function deleteTask(req: AuthenticatedRequest, res : Response) {
    
    const { id } = req.params
    const user_id = req.userId

    try {   
        await deleteTaskService(id, user_id)
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function updateTask(req: AuthenticatedRequest, res: Response) {

    const { id } = req.params;
    const { task, urgency, time } = req.body as task
    const user_id = req.userId

    try {   
        await updateTaskService(id, user_id, task, urgency, time)
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}