import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { usersRepositories } from "../repositories/usersRepository";
import { signupSchema } from "../schemas/usersSechemas";


export async function signUpValidation(req: Request, res: Response, next: NextFunction) {
    const { name, email, password} = req.body;
    const signUpData = req.body;

    const { error } = signupSchema.validate(signUpData, { abortEarly: false });

        if (error) {
            const errors = error.details.map((detail) => detail.message);
            return res.status(422).send( {message: errors });
        }

    try {
        
        const userExist = await usersRepositories.findUser(email);
        
        if (userExist) return res.status(409).send( { message: "Esse email já existe"});
        res.locals.user = signUpData;


    } catch(error) {
        console.log(error);
        res.sendStatus(500);
    }

    next();
}

export async function signInValidate(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
        const userExist = await usersRepositories.findUser(email);
        if (!userExist) return res.sendStatus(404);

        const passwordCompare = bcrypt.compareSync(password, userExist.password);
        if (!passwordCompare) return res.sendStatus(401);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

    next();
}

