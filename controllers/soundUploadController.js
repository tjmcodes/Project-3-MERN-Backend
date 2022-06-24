import SoundUpload from '../models/soundUploadModel.js'

async function postSound(req, res, next) {
  const soundUpload = req.body
  try {
    const newSound = await SoundUpload.create(soundUpload)
    res.status(201).send(newSound)
  } catch (err) {
    next(err)
  }
}

async function getSound(req, res, next) {
  try {
    const soundList = await SoundUpload.find()
    res.send(soundList)
  } catch (err) {
    next(err)
  }
}

export default {
  postSound,
  getSound,
}