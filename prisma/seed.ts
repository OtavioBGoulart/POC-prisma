import prisma from "../src/database/db.js"

async function main() {
    await prisma.users.createMany({
        data: [
            {
                "name": "euu",
                "email": "eu@gmail.com",
                "password": "123456"
            },
            {
                "name": "joao",
                "email": "joao@gmail.com",
                "password": "123456"
            },
            {
                "name": "ana",
                "email": "ana@gmail.com",
                "password": "123456"
            },
            {
                "name": "maria",
                "email": "maria@gmail.com",
                "password": "123456"
            },
        ]
    })

    await prisma.tasks.createMany({
        data: [
            {
                "task_description": "jogar bola",
                "urgency": "medium",
                "predicted_time": 2,
                "user_id": 1
            },
            {
                "task_description": "jogar lol",
                "urgency": "low",
                "predicted_time": 5,
                "user_id": 1
            },
            {
                "task_description": "estudar jest.js",
                "urgency": "high",
                "predicted_time": 15,
                "user_id": 1
            },
            {
                "task_description": "jogar basquete",
                "urgency": "medium",
                "predicted_time": 5,
                "user_id": 2
            }
        ]
    })

    await prisma.goals.createMany({
        data: [
            {
                "goal": "emagrecer 10 kg",
                "time_months": 6,
                "user_id": 1
            }
        ]
    })
}




main()
    .then(() => {
        console.log("Registro feito com sucesso")
    })
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
       await prisma.$disconnect();
    })