import { Router } from "express";
import { addTask, deleteTask, getTasks, updateTask } from "../controllers/tasksController";
import { tasksValidate } from "../middlewares/tasksMiddleware";
import { getTaskById } from "../repositories/taskRepositories";

const router = Router();

router.post("/tasks", tasksValidate, addTask);
router.get("/tasks", getTasks);
router.delete("/tasks/:id", getTaskById, deleteTask);
router.put("/tasks/:id", updateTask);

export default router;