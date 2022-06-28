
import Hashtag from "../models/hashtagModel.js"


async function getAllHashtags(req, res) {
  try {
    const soundData = await Hashtag.find()
    res.json(soundData)
    console.log(soundData)
  } catch (err) {
    return res.status(500).send({ message: "we had problems handling your request on our end. Please try again later" })
  }
}

async function getHashtag(req, res) {
  try {
    const querys = req.query.hashtag
    console.log(querys)
    const matching = await Hashtag.find({ "hashtag": { $regex: querys } } )
    console.log(matching)
    // const querys = req.query
    // console.log(querys)
    //const matching = await Hashtag.find({ hashtag: querys })
    res.json(matching)
    
  } catch (err) {
    res.status(500).send({ message: "We had problems handling your request on our side 😖. Please try again later." })
  }
}

async function createHashtag(req, res) { 
  try {
    const newHashtag = req.body
    console.log(newHashtag)
    const createdHashtag = await Hashtag.create(newHashtag)
    console.log(createdHashtag)
    res.status(201).json(createdHashtag)
  } catch (err) {
    console.log(err)
    return res.status(422).json({ message: "sound has missing or invalid fields" })
  }
}

export default {
  getHashtag,
  createHashtag,
  getAllHashtags,
}