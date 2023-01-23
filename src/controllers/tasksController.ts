import { Request, Response } from "express";
import { task } from "../protocols/task";
import { createTask } from "../repositories/taskRepositories";

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