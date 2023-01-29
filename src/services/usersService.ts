import bcrypt from "bcrypt";
import { usersRepositories } from "../repositories/usersRepository.js";



export async function signUpService(name: string, email: string, password: string) {

    const hashPassword = bcrypt.hashSync(password, 11);
    await usersRepositories.createUser(name, email, hashPassword);
    return;
}