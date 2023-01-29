import { Router } from "express";
import { signIn, signUp } from "../controllers/usersController.js";
import { signInValidate, signUpValidate } from "../middlewares/users.middleware.js";


const usersRouter = Router();

usersRouter.post("/users", signUpValidate, signUp);
usersRouter.post("/sign-in", signInValidate, signIn);

export default usersRouter;