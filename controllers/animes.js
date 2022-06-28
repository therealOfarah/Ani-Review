import { Anime } from "../models/anime.js";
import axios from "axios";

function index(req,res){
  axios.get(`https://kitsu.io/api/edge/anime`)
  .then(response =>{
    res.render('animes/index',{
      title:"All Anime",
      results: response.data
    })
  })
}


function animeSearch(req, res) {
  axios.get(`https://kitsu.io/api/edge/anime?filter`)
  .then(response => {
    // console.log(response.data)
    res.render('animes/search', {
      title: 'Search Results',
      search: req.body.search ? req.body.search : null,
      results: response.data,
    })
  })
}
function show(req,res){
  
}

function hottestAnime(req,res){
  
}
export{
  animeSearch,
  show,
  index,
  hottestAnime
}