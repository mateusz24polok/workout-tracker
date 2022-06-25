import express, { Express, Request, Response } from "express";
import cors from "cors";

export const app: Express = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.get("/", (req: Request, res: Response) => {
  res.send("This is Workout Tracker API");
});
