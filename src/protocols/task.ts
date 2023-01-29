export type taskEntity = {
    id: number
    task: string,
    urgency: string,
    time: number
}

export type task = Omit<taskEntity, "id">