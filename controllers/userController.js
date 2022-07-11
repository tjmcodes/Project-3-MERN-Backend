import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'
import Sound from '../models/soundModel.js'

async function register(req, res, next) {
  const body = req.body
  try {
    if (body.password !== body.passwordConfirmation) {
      return res.status(422).json({
        message: "Passwords do not match., from userController",
        errors: {
          passwordConfirmation: 'Passwords do not match',
        },
      })
    }
    const user = await User.create(body)
    res.status(201).json(user)
    console.log(user)
  } catch (err) {
    next(err)
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })

    const isValidPw = user.validatePassword(req.body.password)

    if (isValidPw) {

      const token = jwt.sign(
        { userId: user._id },
        secret,
        { expiresIn: '24h' }
      )
      res.json({ 
        message: "Login successful!", 
        token, // ! Send back the token with the response. 
      })
    } else {
      res.status(400).json({ message: "Login failed missing field!" } )
    }
  } catch (err) {
    res.status(400).json({ message: "Login failed!" } )
  }
}



async function showAllUsers(req, res) {
  try {
    const allProfiles = await User.find()
    res.json(allProfiles)
    console.log(allProfiles)
  } catch (err) {
    return res.status(500).send({ message: "we had problems handling your request on our end. Please try again later" })
  }
}



async function showSingleUser(req, res) { 
  try {
    const profileById = req.params.singleUserId
    console.log(profileById)
    const userId = await Sound.find({ 'user': profileById }).populate('user')
    console.log(userId)
    if (!userId) return res.json({ message: "ID not found" })
    res.json(userId)
  } catch (err) {
    console.log(err)
    res.json({ message: "there was a problem getting this user's profile" }) 
  }
}



export default {
  register,
  login,
  showSingleUser,
  showAllUsers,
}