import jwt from "jsonwebtoken"
import { secret } from "../config/environment.js"
import User from '../models/user.js'

export default function secureRoute(req, res, next) {
  const rawToken = req.headers.authorization
  try {
  // ! 1) Get the token (already has a bearer) and cleans it up by getting rid of the bearer.
    
    // ? Simple check to make sure we've got a sensible token
    if (!rawToken || !rawToken.startsWith('Bearer')) {
    // not authenticated 
    // If the token doesnt exist or dont start with "Bearer" send the message below.
      return res.status(401).json({ message: 'Unauthorized' })
    }
  } catch (err) {
    return res.status(401).json({ message: "unauthorized" })
  }

  // ? Remove bearer from the beginning of the token
  try {
    const token = rawToken.replace('Bearer ', '')

    // ! 2) Verify the token
    jwt.verify(token, secret, async (err, payload) => {
    // ? If there's any kind of error, send back unauthorized
      if (err) {
        return res.status(401).json({ message: 'Unauthorized, from secureRoute' })
      }
  
      // ? If we've got this far, we now have a valid token.

      // ! 3) Get the user from the token, and move to the route.
      // ! We need this part for permissions later.
      const user = await User.findById(payload.userId)

      // ? Checking if the user exists.
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized, from secureRoute' })
      }

      // ? Adding the current user to our request
      req.currentUser = user

      // ! Finally, pass it on to the route
      
    })
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized, from secureRoute' })
  }
  next()
}