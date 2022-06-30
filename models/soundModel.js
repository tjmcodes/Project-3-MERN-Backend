// This file will be our 'data model': which is a representation we use to interact more
// easily with data stored in our database, and to constrain/validate that data.
import mongoose from "mongoose";
// import validator from "validator";
import uniqueValidator from "mongoose-unique-validator";


// Comment Schema
const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, { // ! This is adding fields that mongoose supports for you. 
  timestamps: true,
})


// Main Sound Schema
const soundSchema = new mongoose.Schema({
  fileName: { type: String, required: false },
  caption: { type: String, required: false },
  hashtag: { type: [String], required: false },
  category: { type: String, required: false },
  subCategory: { type: String, required: false },
  url: { type: String, required: false }, 
  image: { type: String, required: false }, 
  // url: { type: String, validate: (VALUE) => validator.isURL(VALUE), required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: false },
  comments: [commentSchema],
}, { 
  timestamps: true,
  // date: {
  //   type: Date,
  //   default: Date.now, required: false,
  // },
})

soundSchema.plugin(uniqueValidator, { message: 'is already taken.' })  
export default mongoose.model('Sound', soundSchema)

