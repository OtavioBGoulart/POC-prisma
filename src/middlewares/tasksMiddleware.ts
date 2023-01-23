import tasksSchema from "../schemas/tasksSchemas";
import { Request, Response, NextFunction } from "express";

export function taksValidate(req: Request, res: Response, next: NextFunction) {

    const newTask = req.body;

    const { error } = tasksSchema.validate(newTask);

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();

}