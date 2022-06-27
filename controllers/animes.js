import { Anime } from "../models/anime.js";
import axios from "axios";
function animeSearch(req, res) {
  res.render('animes/search', {
    title: 'Search Results',
    search: req.body.search ? req.body.search : null
  })
}
export{
  animeSearch
}