import { task, taskEntity } from "../protocols/task.js";
import { tasksRepository } from "../repositories/taskRepositories.js";


export async function createTaskService(task: string, urgency: string, time: number, id: number) {

    await tasksRepository.createTask(task, urgency, time, id);
    return

}

// export async function countTimeService(id: number) {

//     //const result = await tasksRepository.countTime(id);
//     // const  { rows }  = await countTime();
//     //     console.log(rows)
//     //     const result = await getTasksDB();
//     //     if (result.rowCount === 0) return res.sendStatus(404);
// }

export async function getTasksService(id: number) {

    const task = await tasksRepository.getTasksDB(id)
    if (!task) throw new Error("Não encontrado")
    return task;
}

export async function deleteTaskService(id: string, user_id: number) {

    const taskExist = await tasksRepository.getTaskById(id, user_id)
    if (!taskExist) throw new Error("Não encontrado")
    await tasksRepository.removeTasks(id);
    return
}

export async function updateTaskService(id: string, user_id: number, task: string,  urgency: string, time: number) {

    const taskExist = await tasksRepository.getTaskById(id, user_id)
    if (!taskExist) throw new Error("Não encontrado")
    await tasksRepository.setTask(id, task, urgency, time);

    return
}