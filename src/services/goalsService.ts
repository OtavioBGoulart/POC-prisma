import { goalsRepository } from "../repositories/goalsRepository.js";


export async function createGoalService(goal: string, when: Date | string, id: number) {

    await goalsRepository.createGoal(goal, when, id);
    return

}

// export async function countTimeService(id: number) {

//     //const result = await tasksRepository.countTime(id);
//     // const  { rows }  = await countTime();
//     //     console.log(rows)
//     //     const result = await getTasksDB();
//     //     if (result.rowCount === 0) return res.sendStatus(404);
// }

export async function getGoalsService(id: number) {

    const goal = await goalsRepository.getGoalsDB(id)
    if (!goal) throw new Error("Não encontrado")
    return goal;
}

export async function deleteGoalService(id: string, user_id: number) {

    const goalExist = await goalsRepository.getGoalById(id, user_id)
    if (!goalExist) throw new Error("Não encontrado")
    await goalsRepository.removeGoal(id);
    return
}

// export async function updateTaskService(id: string, user_id: number, task: string,  urgency: string, time: number) {

//     const taskExist = await getTaskById(id, user_id)
//     if (!taskExist) throw new Error("Não encontrado")
//     await setTask(id, task, urgency, time);

   
//     await removeTasks(id);
//     return
// }