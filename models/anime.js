import mongoose from "mongoose";

const Schema = mongoose.Schema

const animeSchema = new Schema({
  name: String,
  description: String,
  start: String,
  end: String,
  ageRating: String,
  animeId:Number,
  reviews:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  collected:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }]
  
})

const Anime = mongoose.model("Anime", animeSchema)
export{
  Anime
}
