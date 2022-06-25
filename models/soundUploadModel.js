// ? This file will be our 'data model': which is a representation we use to interact more
// ? easily with data stored in our database, and to constrain/validate that data.
import mongoose from 'mongoose'

const soundUploadSchema = new mongoose.Schema({
  caption: { type: String, required: false },
  hashtag: { type: [String], required: false },
  category: { type: String, required: false },
  url: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: false }, // this line needs to require user id
})
  
export default mongoose.model('SoundUpload', soundUploadSchema)