// ? Our server file is responsible for setting up and running our express server,
// ? with all the configuration that it needs to work.
import express from "express";
import router from "./views/router.js";
import { connectToDb, disconnectDb } from "./db/helpers.js";
import logger from "./middleware/logger.js";
import mongoSanitize from "express-mongo-sanitize";
import errorHandler from "./middleware/errorHandler.js";
import cors from 'cors'
import { port } from './config/environment.js'


const app = express();

async function startServer() {
  try  {

    app.use(express.json())
    app.use(cors())
    app.use(express.urlencoded({
      extended: true,
    }))
  
    app.use(mongoSanitize());
    app.use(logger)
  
    app.use('/api', router)

    app.use(errorHandler) 

    await connectToDb()
    
    app.listen(port, () => console.log("Hello, world in express!"))
  } catch (err) {
    await disconnectDb()
  }

}

startServer()

export default app
