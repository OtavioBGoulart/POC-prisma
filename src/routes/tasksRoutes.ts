import express from "express";
import { addTask, deleteTask, getTasks, updateTask } from "../controllers/tasksController.js";
import { tasksValidate } from "../middlewares/tasksMiddleware.js";
import { getTaskById } from "../repositories/taskRepositories.js";

const taksRouter = express.Router();

taksRouter.post("/tasks", tasksValidate, addTask);
taksRouter.get("/tasks", getTasks);
taksRouter.delete("/tasks/:id", deleteTask);
taksRouter.put("/tasks/:id", tasksValidate, updateTask);

export default taksRouter;