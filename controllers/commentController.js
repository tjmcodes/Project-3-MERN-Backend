import Sound from '../models/soundModel.js'

async function createComment(req, res) {
  try {

    const soundById = req.params.soundId
    console.log(soundById)
    
    const user = req.currentUser
    console.log(user)
    
    const comment = req.body
    console.log(comment)
  
    const sound = await Sound.findById(soundById).populate('comments.user')
    console.log(sound)

    if (!sound) {
      return res.json({ message: 'No sound file found with this ID' })
    }

    comment.user = user

    sound.comments.push(comment)
    console.log(comment)

    const savedSound = await sound.save()

    res.json(savedSound)
  } catch (err) {
    console.log(err)
    res.json({ message: "There was a problem commenting" })
  }
}

export default {
  createComment,
}