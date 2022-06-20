// ? This file will be our 'data model': which is a representation we use to interact more
// ? easily with data stored in our database, and to constrain/validate that data.
import mongoose from 'mongoose'

const soundSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  sizeInBytes: { type: Number, required: true },
  category: { type: [String], required: true },
  audioFile: { type: String, required: true },// do we need to import this from the files.js to allow users to upload from their own hard drive? },
  hashtag: { type: [String], required: false },
})
  
export default mongoose.model('Sound', soundSchema)

