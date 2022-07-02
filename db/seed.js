import User from '../models/user.js'
import Sound from '../models/soundModel.js'
import soundData from './data/soundData.js'
import userData from '../db/data/userData.js'
import hashtagData from './data/hashtagData.js'
import Hashtag from '../models/hashtagModel.js'

import { connectToDb, disconnectDb } from './helpers.js'

async function seed() {
  await connectToDb()
  
  await User.deleteMany()
  await Sound.deleteMany()

  console.log('Connected to the MongoDB database! 🌱')
  const users = await User.create(userData)
  const lalehUser = users[3]
  
  // Assigning the defualt user profile to the seeded Sounds 
  const soundWithUsers = soundData.map(sound => {
    return { ...sound, user: lalehUser }
  })
  
  // Seeding the hashtag and sound data into the database
  const hashtag = await Hashtag.create(hashtagData)
  console.log(hashtag)
  
  
  const sound = await Sound.create(soundWithUsers)
  console.log(sound)
  
  await disconnectDb()
  console.log('Goodbye, I have disconnected from MongoDB 🌱')
}

seed()