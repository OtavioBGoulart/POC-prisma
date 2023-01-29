import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { usersRepositories } from "../repositories/usersRepository.js";



export async function signUpService(name: string, email: string, password: string) {

    const hashPassword = bcrypt.hashSync(password, 11);
    await usersRepositories.createUser(name, email, hashPassword);
    return;
}

export function signInService(id: number) {

    const token = jwt.sign(
        { id },
        process.env.TOKEN_KEY,
        {
            expiresIn: 60 * 60 * 12,
        }
    )

    return token;
}