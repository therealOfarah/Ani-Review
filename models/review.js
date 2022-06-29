import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5},
  anime: { type: mongoose.Schema.Types.ObjectId, ref: 'Anime' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}
