import path from "path";

import { app } from "./app";

process.on("uncaughtException", (error: Error) => {
  console.log("Process will shut down due to synchronus error");
  console.log(error.name, error.message);
  process.exit(1);
});

const port: number | string = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log("Listening on the server has been started");
});

process.on("unhandledRejection", (error: Error) => {
  console.log("Process is closed due to the unhandled rejection");
  console.log(error.name, error.message);
  server.close(() => {
    process.exit(1);
  });
});
