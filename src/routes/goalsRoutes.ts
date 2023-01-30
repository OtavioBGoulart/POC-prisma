import { Router } from "express";
import { addGoal, deleteGoal, getGoal } from "../controllers/goalsController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";
import { goalsValidate } from "../middlewares/goalsMiddleware.js";

const goalRouter = Router();

goalRouter.post("/goals", authenticateToken,  goalsValidate, addGoal);
goalRouter.get("/goals", authenticateToken, getGoal);
goalRouter.delete("/goals/:id", authenticateToken, deleteGoal);
//goalRouter.put("/tasks/:id", authenticateToken, tasksValidate, updateTask);

export default goalRouter;