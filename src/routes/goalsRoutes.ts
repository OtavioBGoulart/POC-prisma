import { Router } from "express";
import { addGoal, deleteGoal, getGoal, updateGoal } from "../controllers/goalsController.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";
import { goalsValidate } from "../middlewares/goalsMiddleware.js";

const goalRouter = Router();

goalRouter.post("/goals", authenticateToken,  goalsValidate, addGoal);
goalRouter.get("/goals", authenticateToken, getGoal);
goalRouter.delete("/goals/:id", authenticateToken, deleteGoal);
goalRouter.put("/goals/:id", authenticateToken, goalsValidate, updateGoal);

export default goalRouter;