import joi from 'joi';

export const signinSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});


export const signupSchema = joi.object({
    name: joi.string().alphanum().max(15).min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
  });
  