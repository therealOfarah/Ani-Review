import { Anime } from "../models/anime.js";
import axios from "axios";
function animeSearch(req, res) {
  axios.get(`https://kitsu.io/api/edge/anime`)
  .then(response => {
    // console.log(response.data)
    res.render('animes/search', {
      title: 'Search Results',
      search: req.body.search ? req.body.search : null,
      results: response.data
    })
  })
}
function show(req,res){
  console.log("infoiwnqofinewrfnqoeinfqoenfqoenfqowen")
}

export{
  animeSearch,
  show
}