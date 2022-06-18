// ? A file that will be used to 'seed' our database with initial data.
import mongoose from 'mongoose'
import Pokemon from '../models/pokemon.js'
import User from '../models/user.js'
import pokemonData from './data/data.js'
import userData from './data/userData.js'
import { connectToDb, disconnectDb } from './helpers.js'

async function seed() {
  await connectToDb()

  mongoose.connection.db.dropDatabase()

  console.log('Connected to the database! 🌱')

  // ! Create my user(s) first
  const users = await User.create(userData)
  const nickUser = users[0]

  // ! Add a user to each pokemon
  const pokeWithUsers = pokemonData.map(pokemon => {
    return { ...pokemon, user: nickUser }
  })

  // pokemonData.forEach(pokemon => {
  //   pokemon.user = nickUser
  // })

  // ! Create the pokemon with users
  const pokemon = await Pokemon.create(pokeWithUsers)
  console.log(pokemon)

  await disconnectDb()
  console.log('Goodbye 🌱')
}

seed()