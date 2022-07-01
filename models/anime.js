import mongoose from "mongoose";

const Schema = mongoose.Schema

const animeSchema = new Schema({
  name: String,
  description: String,
  start: String,
  end: String,
  ageRating: String,

})

const Anime = mongoose.model("Anime", animeSchema)
export {
  Anime
}
