import tasksSchema from "../schemas/tasksSchemas.js";
import { Request, Response, NextFunction } from "express";
import { task } from "../protocols/task.js";

export function tasksValidate(req: Request, res: Response, next: NextFunction) {

    const newTask = req.body as task;

    const { error } = tasksSchema.validate(newTask);

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();

}