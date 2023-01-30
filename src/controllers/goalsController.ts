import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authMiddleware.js";
import { goal } from "../protocols/goal.js";
import { createGoalService, deleteGoalService, getGoalsService, updateGoalService } from "../services/goalsService.js";

export async function addGoal(req: AuthenticatedRequest, res: Response) {

    const {goal, when} = req.body as goal;
    const id = req.userId

    try {
        await createGoalService(goal, when, id);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function getGoal(req: AuthenticatedRequest, res: Response) {
    const id = req.userId;

    try {
        //const tasksCount = countTimeService(id)
        const goals = await getGoalsService(id)
        res.status(200).send(goals);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function deleteGoal(req: AuthenticatedRequest, res : Response) {
    
    const { id } = req.params
    const user_id = req.userId

    try {   
        await deleteGoalService(id, user_id)
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}

export async function updateGoal(req: AuthenticatedRequest, res: Response) {

    const { id } = req.params;
    const { goal, when } = req.body as goal
    const user_id = req.userId

    try {   
        await updateGoalService(id, user_id, goal, when);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}