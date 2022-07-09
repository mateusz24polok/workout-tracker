import express, { Express, Request, Response } from "express";
import cors from "cors";

import { userRouter } from "./routers/user.router";
import { handleError } from "./utils/errors";

export const app: Express = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

// ROUTERS

app.use("/api/v1/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("This is Workout Tracker API");
});

app.use(handleError);
