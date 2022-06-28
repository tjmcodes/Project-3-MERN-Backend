// ? The controller contains the code to work with our data and send it back to the user interacts and manipulates the data.

import Sound from "../models/soundModel.js"

async function getAllSounds(req, res) {
  try {
    const soundData = await Sound.find().populate('user')
    res.json(soundData)
    console.log(soundData)
  } catch (err) {
    return res.status(500).send({ message: "we had problems handling your request on our end. Please try again later" })
  }
}


async function createSound(req, res) { 
  try {
    const newSound = req.body
    newSound.user = req.currentUser
    const createdSound = await Sound.create(newSound)
    console.log(newSound)
    res.status(201).json(createdSound)
  } catch (err) {
    return res.status(422).json({ message: "sound has missing or invalid fields" })
  }
}

async function getSingleSound(req, res) { 
  try {
    const soundById = req.params.soundId
    const sound = await Sound.findById(soundById).populate('user')
    if (!sound) return res.json({ message: "sound not found" })
    res.json(sound)
  } catch (err) {
    res.json({ message: "there was a problem getting this sound" }) 
  }
}

async function removeSoundById(req, res) {
  try {
    const soundById = req.params.soundId
    const user = req.currentUser
    const soundToDelete = await Sound.findById(soundById)
    if (!soundToDelete.user.equals(user._id)) {
      return res.json({ message: "unauthorized" }) 
    }
    if (!soundToDelete) {
      return res.json({ message: "sound not found" })
    }
    await Sound.findByIdAndDelete(soundById)
    res.sendStatus(204) 
  } catch (err) {
    res.status(422).json({ message: "this sound id is an invalid format" })
  }
}

async function updateSound(req, res) {
  try {
    const soundById = req.params.soundId
    const newSound = req.body

    const soundToUpdate = await Sound.findById(soundById)

    if (!soundToUpdate) return res.json({ message: "Sound not found" })

    const updatedSound = await Sound.findByIdAndUpdate(soundById, newSound, { new: true })

    res.status(201).json(updatedSound)
  } catch (err) {
    if (err.path === "_id") {
      res.status(422).json({ message: "This sound ID is in an invalid format." })
    } else {
      res.status(422).json({ message: 'Sound has missing or invalid fields.' })
    }
  }
}

async function getSoundsByHashtag(req, res) {
  try {
    const soundById = req.query.hashtag
    console.log(soundById)
    const sounds = await Sound.find( { hashtag: soundById } )
    if (!sounds) return res.json({ message: "sound not found" })
    res.json(sounds)
  } catch (err) {
    res.json({ message: "there was a problem getting this sound" }) 
  }
}
//https://www.mongodb.com/docs/manual/tutorial/query-arrays/
  



export default {
  getAllSounds,
  createSound, 
  getSingleSound,
  removeSoundById,
  updateSound,
  getSoundsByHashtag,
}