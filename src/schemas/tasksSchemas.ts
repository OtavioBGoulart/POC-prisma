import joi from "joi";

const tasksSchema = joi.object({
    task: joi.string().required(),
    urgency: joi.valid("low", "medium","high"),
    time: joi.number().required()
})

export default tasksSchema;
