import { connection } from "../database/db";


export function createTask(task: string, urgency: string) {

    return connection.query(
        `INSERT INTO tasks (task_description, urgency)
        VALUES ($1, $2)
        ;`, [task, urgency]
    )
}

export function getTasksDB() {

    return connection.query(
        `
        SELECT *, COUNT(id) FROM tasks
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