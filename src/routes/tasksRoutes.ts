import { Router } from "express";
import { addTask, deleteTask, getTasks } from "../controllers/tasksController";
import { tasksValidate } from "../middlewares/tasksMiddleware";

const router = Router();

router.post("/tasks", tasksValidate, addTask);
router.get("/tasks", getTasks);
router.delete("/tasks", deleteTask);
router.put("/tasks");

export default router;