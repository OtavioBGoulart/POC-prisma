import joi from "joi";

const tasksSchema = joi.object({
    taks: joi.string().required(),
    urgency: joi.valid("low, medium, high")
})

export default tasksSchema;
