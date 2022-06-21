// ? Our server file is responsible for setting up and running our express server,
// ? with all the configuration that it needs to work.
import express from "express";
import router from "./views/router.js";
import { connectToDb, disconnectDb } from "./db/helpers.js";
import logger from "./middleware/logger.js";
import mongoSanitize from "express-mongo-sanitize";

// import fileRoute from "./views/files.js"
const app = express();

async function startServer() {
  try  {
    
    app.use(express.json())
  
    app.use(mongoSanitize());
  
    app.use(logger)
  
    app.use('/api', router)
    // app.use("/api/files", fileRoute)

    // ! Before I start listening on port 4000, I'm going to connect to MongoDB.
    await connectToDb()
    
    app.listen(4000, () => console.log("Hello, world in express!"))
  } catch (e) {
    await disconnectDb()
  }

}

startServer()

export default app


//! GIT TEST 3.0 (blockchain)