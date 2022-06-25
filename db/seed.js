// ! A program that will be used to 'seed' our database with initial data.
import mongoose from 'mongoose'
// ! Import both the data AND the model
import User from '../models/user.js'
import Sound from '../models/soundModel.js'
import soundData from './data/soundData.js'
import userData from '../db/data/userData.js'
import hashtagData from './data/hashtagData.js'
import Hashtag from '../models/hashtagModel.js'

import { connectToDb, disconnectDb } from './helpers.js'

async function seed() {
  // Connect to db
  await connectToDb()
  
  // Clear the database
  await mongoose.connection.db.dropDatabase()
  
  // ! 2) Celebrate we've connected
  console.log('Connected to the MongoDB database! 🌱')

  const users = await User.create(userData)
  const lalehUser = users[0]

  const soundWithUsers = soundData.map(sound => {
    return { ...sound, user: lalehUser }
  })
  
  const hashtag = await Hashtag.create(hashtagData)
  console.log(hashtag)

  // ! 3) Seed our data!
  const sound = await Sound.create(soundWithUsers)
  console.log(sound)
  
  // ! 4) Disconnect from the database
  await disconnectDb()
  console.log('Goodbye, I have disconnected from MongoDB 🌱')
}

seed()