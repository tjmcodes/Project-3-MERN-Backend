// ? Our server file is responsible for setting up and running our express server,
// ? with all the configuration that it needs to work.
import express from "express";
import router from "./views/router.js";

const app = express();

app.use(router)


app.use('/api', router)
//app.use("/api/files", fileRoute)

app.listen(4000, () => console.log("Hello, world in express!"))


