// ? Applications routes will live in here.

import express from "express"
import soundController from "../controllers/soundController.js"
import userController from "../controllers/UserController.js"

const router = express.Router()

router.route("/sounds")
  .get(soundController.getSound)
  .post(soundController.createSound)

router.route("/sounds/:soundId")
  .get(soundController.getSingleSound)
export default router

router.route("/register")
  .post(userController.register)

router.route("/login")
  .post(userController.login)  
  // Routes to be added in future with controller 
//! Universal 

// Get all sound from a single user

//! only by the OP 
// Method to Delete by id
// Delete all sounds which the user has posted 
// Update a sound by id