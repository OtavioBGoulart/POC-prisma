import { Router } from "express";
import { addTask } from "../controllers/tasksController";
import { tasksValidate } from "../middlewares/tasksMiddleware";

const router = Router();

router.post("/tasks", tasksValidate, addTask);
router.get("/tasks");
router.delete("/tasks");
router.put("/tasks");

export default router;