// ? Applications routes will live in here.

import express from "express"
import soundFileController from "../controllers/soundFileController.js"

const router = express.Router()

router.route("/sounds")
  .get(soundFileController.getSoundFile)
  .post(soundFileController.createsoundfile)

  
export default router