import joi from 'joi';

export const goalSchema = joi.object({
  goal: joi.string().required(),
  when: joi.date().required()
});
