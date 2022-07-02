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

//import errorHandler from "./middleware/errorHandler.js"

// import fileRoute from "./views/files.js"
const app = express();

async function startServer() {
  try  {
    // await connectToDb()
 
    // You NEED express.json() and express.urlencoded() for POST and PUT requests, 
    // both these requests you are sending data (in the form of some data object) to the server 
    // and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
    // Express provides you with middleware to deal with the (incoming) data (object) in the body of the request.

    app.use(express.json())
    app.use(cors())
    app.use(express.urlencoded({
      extended: true,
    }))
  
    app.use(mongoSanitize());
  
    app.use(logger)
  
    app.use('/api', router)

    app.use(errorHandler) // this is needed in order to add error messages
    // app.use("/api/files", fileRoute)

    // ! Before I start listening on port 4000, I'm going to connect to MongoDB.
    await connectToDb()
    
    app.listen(port, () => console.log("Hello, world in express!"))
  } catch (err) {
    await disconnectDb()
  }

}

startServer()

export default app
