import mongoose from 'mongoose'

const Schema = mongoose.Schema

// const bioSchema = new Schema({
  
// })

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  aboutMe:String,
  location:String,
  favoriteAnime:String
  // bio: [bioSchema]

}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
