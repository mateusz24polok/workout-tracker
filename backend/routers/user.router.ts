import { Router } from "express";

import { login, signUp } from "../controllers/auth.controller";

export const userRouter = Router();

userRouter.post("/register", signUp);
userRouter.post("/login", login);
