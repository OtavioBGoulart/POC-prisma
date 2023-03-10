import prisma from "../database/db.js";
import { task } from "../protocols/task.js";


async function createTask(task: string, urgency: string, time: number, id: number) {

    return await prisma.tasks.create({
        data: {
            task_description: task,
            urgency,
            predicted_time: time,
            user_id: id
        }
    })
}

export async function countTime(id: number) {

    return await prisma.tasks.groupBy({
        by: ["urgency"],
        where: {
            user_id: id
        },
        _sum: {
            predicted_time: true
        },
    })
}

async function getTasksDB(id: number) {

    return await prisma.tasks.findMany({
        where: {
            user_id: id
        }
    })
}

async function getTaskById(id: string, user_id: number) {

    return await prisma.tasks.findFirst({
        where: {
            AND: [
                { id: Number(id) },
                { user_id }
            ]
        }
    })
}

async function removeTasks(id: string) {

    return await prisma.tasks.delete({
        where: {
            id: Number(id)
        }
    })
}

async function setTask(id: string,
    task: string,
    urgency: string,
    time: number
) {

    return await prisma.tasks.update({
        where: {
            id: Number(id)
        },
        data: {
            task_description: task,
            urgency,
            predicted_time: time
        }
    })

}

export const tasksRepository = {
    createTask,
    getTasksDB,
    getTaskById,
    removeTasks,
    setTask,
    countTime
}

