import mongoose from 'mongoose'



const hashtagSchema = new mongoose.Schema({
  hashtag: { type: String, required: true },
  id: { type: Number, required: true },
})
  
export default mongoose.model('Hashtag', hashtagSchema)