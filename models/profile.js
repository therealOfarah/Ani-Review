import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new mongoose.Schema({
  content: String,
}, {
  timestamps: true,
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  aboutMe: String,
  location: String,
  favoriteAnime: String,
  anime: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Anime' }],
  reviews: [reviewSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
