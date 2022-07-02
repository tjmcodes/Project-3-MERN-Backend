
import Hashtag from "../models/hashtagModel.js"


async function getHashtag(req, res) {
  try {
    const querys = req.query.hashtag
    console.log(querys)
    const matching = await Hashtag.find({ "hashtag": { $regex: querys } } )
    console.log(matching)
    res.json(matching)
    
  } catch (err) {
    res.status(500).send({ message: "We had problems handling your request on our side 😖. Please try again later." })
  }
}

export default {
  getHashtag,
}