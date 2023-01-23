import { Request, Response } from "express";
import { task } from "../protocols/task";
import { countTime, createTask, getTaskById, getTasksDB, removeTasks, setTask } from "../repositories/taskRepositories.js";

export async function addTask(req: Request, res: Response) {

    const { task, urgency, time } = req.body as task;

    try {
        const result = await createTask(task, urgency, time);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getTasks(req: Request, res: Response) {
    
    try {
        const  { rows }  = await countTime();
        console.log(rows)
        const result = await getTasksDB();
        if (result.rowCount === 0) return res.sendStatus(404);
        res.status(200).send({predictedTime: rows, tasks: result.rows});
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function deleteTask(req: Request, res : Response) {
    
    const { id } = req.params
    console.log(id)

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

export async function updateTask(req: Request, res: Response) {

    const { id } = req.params;
    const { task, urgency, time } = req.body as task

    try {   
        const taskExist = await getTaskById(id)
        if (taskExist.rowCount === 0) return res.sendStatus(404);
        await setTask(id, task, urgency, time);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}