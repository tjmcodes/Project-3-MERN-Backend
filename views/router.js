// ? Applications routes will live in here.
import secureRoute from "../middleware/secureRoute.js"
import express from "express"
import soundController from "../controllers/soundController.js"
import userController from "../controllers/UserController.js"
import commentController from "../controllers/commentController.js"
import hashtagController from "../controllers/hashtagController.js"
const router = express.Router()

router.route("/all-sounds")
  .get(soundController.getAllSounds)
  .post(secureRoute, soundController.createSound)

router.route("/all-sounds/:soundId")
  .get(soundController.getSingleSound)
  .delete(secureRoute, soundController.removeSoundById)
  .put(secureRoute, soundController.updateSound)

router.route("/all-sounds/:soundId/comments")
  .post(secureRoute, commentController.createComment)

router.route("/register")
  .post(userController.register)

router.route("/login")
  .post(userController.login)  


router.route('/hashtags')
  .get(hashtagController.getHashtag)
  //.post(hashtagController, createHashtag)

router.route("/all-soundsbyhashtag")
  .get(soundController.getSoundsByHashtag)


export default router


// Routes to be added in future with controller 
//! Universal 

// Get all sound from a single user

//! only by the OP 
// Delete all sounds which the user has posted 
// Update a sound by id