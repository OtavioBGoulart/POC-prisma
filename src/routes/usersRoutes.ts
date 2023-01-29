import { Router } from "express";
import { signUp } from "../controllers/usersController.js";
import { signInValidate, signUpValidate } from "../middlewares/users.middleware.js";


const usersRouter = Router();

usersRouter.post("/users", signUpValidate, signUp);

export default usersRouter;