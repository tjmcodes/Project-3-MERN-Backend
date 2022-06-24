// ? This file will be our 'data model': which is a representation we use to interact more
// ? easily with data stored in our database, and to constrain/validate that data.
import mongoose from 'mongoose'

const soundUploadSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  caption: { type: String, required: true },
  url: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
})
  
export default mongoose.model('SoundUpload', soundUploadSchema)