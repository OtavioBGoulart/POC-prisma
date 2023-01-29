import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { signUpService } from "../services/usersService.js";
import { signInType } from "../protocols/signIn.js";

export async function signUp(req: Request, res: Response) {
    const {name, email, password} = req.body as signInType;

    try {
        await signUpService(name, email, password);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function signIn(req: Request, res: Response) {
    const { id, name } = req.body;

    const token = jwt.sign(
        { user_id: id, name },
        process.env.TOKEN_KEY,
        {
            expiresIn: 60 * 60 * 12,
        }
    )

    res.status(200).send({ token });
}

