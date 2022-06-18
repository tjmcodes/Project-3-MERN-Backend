// ? The controller contains the code to work with our data and send it back to the user.
// ? It's the part that can interact and manipulate our data. 

import soundFile from "../db/data/data.js";

function getSoundFile(req, res) {
  res.json(soundFile)
  console.log(soundFile)
}

function createsoundfile(req, res) {
  const newSound = req.body
  console.log(newSound)
  soundFile.push(newSound)
  res.status(201).json(newSound)
}


export default {
  getSoundFile,
  createsoundfile,
}