import joi from "joi";

const tasksSchema = joi.object({
    taks: joi.string().required()
})

export default tasksSchema;
