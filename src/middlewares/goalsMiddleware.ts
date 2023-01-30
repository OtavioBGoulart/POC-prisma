import { Request, Response, NextFunction } from "express";
import { goal } from "../protocols/goal.js";
import { goalSchema } from "../schemas/goalsSchemas.js";

export function goalsValidate(req: Request, res: Response, next: NextFunction) {

    const newGoal = req.body as goal;

    const { error } = goalSchema.validate(newGoal);

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    next();

}