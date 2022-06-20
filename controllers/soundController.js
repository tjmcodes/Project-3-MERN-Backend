// ? The controller contains the code to work with our data and send it back to the user.
// ? It's the part that can interact and manipulate our data. 

import Sound from "../models/soundModel.js"

async function getSound(req, res) {
  const soundData = await Sound.find()
  res.json(soundData)
  console.log(soundData)
}

async function createSound(req, res) { 
  const newSound = req.body
  const createdSound = await Sound.create(newSound)
  console.log(newSound)
  res.status(201).json(createdSound)
}

async function getSingleSound(req, res) { 
  const soundById = req.params.soundId
  console.log(soundById)
  const sound = await Sound.findById(soundById)
  res.json(sound)
}


//! Universal 

// Get all sound from a single user

//! only by the OP 
// Method to Delete by id
// Delete all sounds which the user has posted 
// Update a sound by id



export default {
  getSound,
  createSound,
  getSingleSound,
}