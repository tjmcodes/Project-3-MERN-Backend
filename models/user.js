import mongoose from 'mongoose'
// ! Importing bcrypt, our hashing function
import bcrypt from 'bcrypt'
import uniqueValidator from 'mongoose-unique-validator' // ! 4) emails should be unique
import mongooseHidden from 'mongoose-hidden' // ! 5) hidden fields
import validator from 'validator';

const schema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { 
    type: String, 
    required: true,
    unique: true,

    validate: (email) => validator.isEmail(email),
  },  
  password: { 
    type: String, 
    required: true ,
    validate: (password) => /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)
  },
  image: { type: String, required: false },
})

// ! Before we save to the database, I'm going to hash
// ! the password, and save that instead.

// ! Schema, before you save, run this function (hashPw):
schema.pre('save', function hashPassword(next) {
  // ! Hash the password with bcrypt
  // ? this -> refers to the user (document) we're about to save
  // ! First argument, the actual pw to hash
  // ! Second argument, the salt to hash with (adds randomness to the hash)
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  // ! Tell mongoose we're finished hashing the pw
  next()
})

// ! Adding a little function to compare the two hashed passwords!
schema.methods.validatePassword = function validatePassword(password) {
  // ! Compare the password you're checking, with the one in the database.
  return bcrypt.compareSync(password, this.password)
}

schema.plugin(mongooseHidden({ defaultHidden: { password: true, email: true, _id: true } })) // ! 5) hidden fields
schema.plugin(uniqueValidator) // ! 4) emails should be unique

export default mongoose.model('User', schema)

