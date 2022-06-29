import jwt from "jsonwebtoken"
import { secret } from "../config/environment.js"
import User from '../models/user.js'

export default function secureRoute(req, res, next) {
  // Taking and processing the bearer token to authenticate it.
  const rawToken = req.headers.authorization
  try {
    if (!rawToken || !rawToken.startsWith('Bearer')) {
      return res.status(401).json({ message: 'Unauthorized' })
    }
    
    const token = rawToken.replace('Bearer ', '')

    // Authetication process and error handling in cases of the user not being authorized.
    jwt.verify(token, secret, async (err, payload) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized, from secureRoute' })
      }
      const user = await User.findById(payload.userId)
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized, from secureRoute' })
      }
      req.currentUser = user
      next()
    })
    
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized, from secureRoute' })
  }
  
}