// ? Our server file is responsible for setting up and running our express server,
// ? with all the configuration that it needs to work.
import express from "express";
import router from "./views/router.js";
import { connectToDb } from "./db/helpers.js";
import logger from "./middleware/logger.js";
import mongoSanitize from "express-mongo-sanitize";

// import fileRoute from "./views/files.js"

async function startServer() {
  const app = express();

  app.use(express.json())

  app.use(mongoSanitize());

  app.use(logger)

  app.use(router)

  // ! Before I start listening on port 4000, I'm going to connect to MongoDB.
  await connectToDb()

  app.use('/api', router)
  // app.use("/api/files", fileRoute)

  app.listen(4000, () => console.log("Hello, world in express!"))


}

startServer()