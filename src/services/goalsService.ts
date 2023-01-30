import { goalsRepository } from "../repositories/goalsRepository.js";


export async function createGoalService(goal: string, when: number, id: number) {

    await goalsRepository.createGoal(goal, when, id);
    return

}


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

export async function updateGoalService(id: string, user_id: number, goal: string, when: number) {

    const goalExist = await goalsRepository.getGoalById(id, user_id)
    if (!goalExist) throw new Error("Não encontrado")
    await goalsRepository.setGoal(id, goal, when);

    return
}