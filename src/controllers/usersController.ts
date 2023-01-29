import { Request, Response } from "express";
import { signInService, signUpService } from "../services/usersService.js";
import { signInType } from "../protocols/signIn.js";
import { SignInRequest } from "../middlewares/users.middleware.js";

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

export async function signIn(req: SignInRequest, res: Response) {
    const id  = req.userId;

    try {
    const token = signInService(id)
    res.status(200).send({ token });
    
    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }
}

