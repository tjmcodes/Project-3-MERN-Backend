// ! Controller just for comments.
import Sound from '../models/soundModel.js'

async function createComment(req, res) {
  try {
    // ! We need to provide the pokemon ID we're commenting on.
    const soundById = req.params.soundId
    // ! We also need to get the user/user ID for the user commenting.
    const user = req.currentUser
    // ! Grab the info from the request body.
    const comment = req.body
    // ! Get the pokemon we're comment on.
    const sound = await Sound.findById(soundById)
    // ! Handle it if no pokemon is found
    if (!sound) {
      return res.json({ message: 'No sound file found with this ID' })
    }
    // ! Push the new comment to the comments array
    comment.user = user
    // ! Pushing our new comment to this pokemon does
    // ! NOT update it in the database YET. 
    sound.comments.push(comment)

    // ! So we need to save it to the database.
    const savedSound = await sound.save()
    // ! Sending back the comment
    res.json(savedSound)
  } catch (e) {
    res.json({ message: "There was a problem commenting" })
  }
}

export default {
  createComment,
}