import { Router } from "express";

const router = Router();

router.post("/tasks");
router.get("/tasks");
router.delete("/tasks");
router.put("/tasks");

export default router;