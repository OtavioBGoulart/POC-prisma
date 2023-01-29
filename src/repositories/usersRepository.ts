import prisma from "../database/db.js";
import { signInType } from "../protocols/signIn.js";

export async function createUser(name: string, email: string, hashPassword: string) {

    return await prisma.users.create({
        data: {
            name,
            email, 
            password: hashPassword
        }
    })
}

function findUser(email: string) {
    return prisma.users.findFirst({
        where: {
            email
        }
    })
}


export const usersRepositories = {
    findUser,
    createUser
}