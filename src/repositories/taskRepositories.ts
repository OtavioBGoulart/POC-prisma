import { connection } from "../database/db";


export function createTask(task : string, urgency : string) {

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
        `
    )
}