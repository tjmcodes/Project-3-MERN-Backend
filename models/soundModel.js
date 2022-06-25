// ? This file will be our 'data model': which is a representation we use to interact more
// ? easily with data stored in our database, and to constrain/validate that data.
import mongoose from 'mongoose'

// ! Brand new schema for comments.
const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, { // ! This is adding fields that mongoose supports for you. 
  timestamps: true,
})



const soundSchema = new mongoose.Schema({
  fileName: { type: String, required: false },
  caption: { type: String, required: false },
  hashtag: { type: [String], required: false },
  category: { type: String, required: false },
  subCategory: { type: String, required: false },
  url: { type: String, required: false },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: false },
}, { // ! This is adding fields that mongoose supports for you. 
  timestamps: true,
  comments: [commentSchema],
})

// 
//   sizeInBytes: { type: Number, required: true },
//   category: { type: [String], required: true },
//   audioFile: { type: String, required: true },// do we need to import this from the files.js to allow users to upload from their own hard drive? },
//   hashtag: { type: [String], required: false },
//   user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
//   comments: [commentSchema],
  
export default mongoose.model('Sound', soundSchema)

