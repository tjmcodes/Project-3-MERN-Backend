
import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";


// Comment Schema
const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})


// Main Sound Schema
const soundSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  caption: { type: String, required: true },
  hashtag: { type: [String], required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: false },
  url: { type: String, required: true }, 
  image: { type: String, required: false }, 
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema],
}, { 
  timestamps: true,
})

soundSchema.plugin(uniqueValidator, { message: 'is already taken.' })  
export default mongoose.model('Sound', soundSchema)

