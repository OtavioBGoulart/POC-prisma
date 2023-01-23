import { connection } from "../database/db.js";


export function createTask(task: string, urgency: string, time: number) {

    return connection.query(
        `INSERT INTO tasks (task_description, urgency, predicted_time)
        VALUES ($1, $2, $3)
        ;`, [task, urgency, time]
    )
}

export function countTime() {

    return connection.query(
        `
        SELECT urgency, SUM(predicted_time) FROM tasks GROUP BY urgency;
                                     
        ;`
    )
}

export function getTasksDB() {

    return connection.query(
        `
        SELECT * FROM tasks
        GROUP BY id
        ;`
    )
}

export function getTaskById(id: string) {

    return connection.query(
        `
        SELECT * FROM tasks
        WHERE id=$1
        ;`
        , [id]
    )
}

export function removeTasks(id: string) {

    return connection.query(
        `
        DELETE FROM tasks WHERE id=$1
        ;`, [id]
    )
}

export function setTask(id: string,
    task: string,
    urgency: string,
    time : number) {

    return connection.query(
        `
        UPDATE tasks SET task_description = $1, urgency = $2, predicted_time = $3
        WHERE id = $4
        ;`, [task, urgency, time, id]
    )
}