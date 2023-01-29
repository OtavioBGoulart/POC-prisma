import express from "express";
import { addTask, deleteTask, getTasks, updateTask } from "../controllers/tasksController.js";
import { tasksValidate } from "../middlewares/tasksMiddleware.js";
import { getTaskById } from "../repositories/taskRepositories.js";
import { authenticateToken } from "../middlewares/authMiddleware.js";

const taksRouter = express.Router();

taksRouter.post("/tasks", authenticateToken ,tasksValidate, addTask);
taksRouter.get("/tasks", authenticateToken, getTasks);
taksRouter.delete("/tasks/:id", authenticateToken, deleteTask);
taksRouter.put("/tasks/:id", authenticateToken, tasksValidate, updateTask);

export default taksRouter;