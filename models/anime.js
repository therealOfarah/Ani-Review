import mongoose from "mongoose";

const Schema = mongosoe.Schema

const animeSchema = new Schema({
  name: String,
  description: String,
  start: String,
  end: String,
  ageRating: String
})

const Anime = mongoose.model("Anime", animeSchema)
