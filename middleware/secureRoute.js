import jwt from "jsonwebtoken"
import { secret } from "../config/environment.js"
import User from '../models/user.js'

export default function secureRoute(req, res, next) {
  const rawToken = req.headers.authorization
  try {

    if (!rawToken || !rawToken.startsWith('Bearer')) {
    // not authenticated 
    // If the token doesnt exist or dont start with "Bearer" send the message below.
      return res.status(401).json({ message: 'Unauthorized' })
    }
  // } catch (err) {
  //   return res.status(401).json({ message: "unauthorized" })
  // }

  
  // try {
    const token = rawToken.replace('Bearer ', '')

    jwt.verify(token, secret, async (err, payload) => {

      if (err) {
        return res.status(401).json({ message: 'Unauthorized, from secureRoute' })
      }
      const user = await User.findById(payload.userId)
      // Checking if the user exists.
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