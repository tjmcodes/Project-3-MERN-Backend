import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import uniqueValidator from 'mongoose-unique-validator' 
import mongooseHidden from 'mongoose-hidden'
import validator from 'validator';

const schema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { 
    type: String, 
    required: [true, 'Enter a valid email address'], //
    unique: [true, 'That email address is already taken'], 
    lowercase: true,
    validate: [validator.isEmail, 'Enter a valid email address'],
  },
  password: { 
    type: String, 
    required: [true, 'Enter a valid password'], 
    minLength: [8, 'Password must be at least 8 characters and include at least one letter, one number and one special character'],
    validate: (password) => /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password),
  },
  image: { type: String, required: false, default: "https://res.cloudinary.com/dy4gabnho/image/upload/v1655660650/pets/my_favorite/axjizpfu7eqzg0uqcigf.jpg" },
})



// Function to hash and store the hashed password using the bcrypt libary 
schema.pre('save', function hashPassword(next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  next()
})

// Function which compares the user entered password to the hashed one
schema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password)
}

//Hiding the password for security on the frontend 
schema.plugin(mongooseHidden({ defaultHidden: { password: true, email: true, _id: false } })) 
schema.plugin(uniqueValidator) 

export default mongoose.model('User', schema)

