import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

async function register(req, res) {
  const body = req.body
  try {
    // ! 6) password confirmation
    if (body.password !== body.passwordConfirmation) {
      return res.status(422).json({ message: "Passwords do not match." })
    }
    const user = await User.create(body)
    res.status(201).json(user)
  } catch (err) {
    console.log(err)
    res.status(422).json({ message: 'User has missing or invalid fields.' })
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
      res.status(400).json({ message: "Login failed!" } )
    }
  } catch (err) {
    res.status(400).json({ message: "Login failed!" } )
  }
}

export default {
  register,
  login,
}