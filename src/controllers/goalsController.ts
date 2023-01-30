import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/authMiddleware.js";
import { goal } from "../protocols/goal.js";
import { createGoalService, deleteGoalService, getGoalsService } from "../services/goalsService.js";

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

// export async function updateTask(req: AuthenticatedRequest, res: Response) {

//     const { id } = req.params;
//     const { task, urgency, time } = req.body as task
//     const user_id = req.userId

//     try {   
//         await updateTaskService(id, user_id, task, urgency, time)
//         res.sendStatus(200);
//     } catch (error) {
//         console.log(error);
//         res.sendStatus(404);
//     }
// }