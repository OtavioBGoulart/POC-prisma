import prisma from "../database/db.js";


async function createGoal(goal: string, when: Date | string, id: number) {

    return await prisma.goals.create({
        data: {
            goal,
            when,
            user_id: id
        }
    })
}

// export async function countTime(id: number) {

//     return await prisma.tasks.findMany({
//         where: {
//             user_id: id
//         },
//         groupBy: {
//             urgency: true,
//         },
//         include: {
//             aggregate: {
//                 sum: {predicted_time: true},
//             },
//         },
//     }) 
//     // return connection.query(
//     //     `
//     //     SELECT urgency, SUM(predicted_time) FROM tasks GROUP BY urgency;

//     //     ;`
//     // )
// }

async function getGoalsDB(id: number) {

    return await prisma.goals.findMany({
        where: {
            user_id: id
        }
    })
}

async function getGoalById(id: string, user_id: number) {

    return await prisma.goals.findFirst({
        where: {
            AND: [
                { id: Number(id) },
                { user_id }
            ]
        }
    })
}

async function removeGoal(id: string) {

    return await prisma.goals.delete({
        where: {
            id: Number(id)
        }
    })
}

async function setGoal(id: string,
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

export const goalsRepository = {
    createGoal,
    getGoalsDB,
    getGoalById,
    removeGoal
}

