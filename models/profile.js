import mongoose from 'mongoose'

const Schema = mongoose.Schema


const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  aboutMe:String,
  location:String,
  favoriteAnime:String,
  anime: { type: mongoose.Schema.Types.ObjectId, ref: 'Anime' }

}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
