import { Anime } from "../models/anime.js";
import axios from "axios";

function index(req,res){
  axios.get(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=20r&page%5Boffset%5D=0`)
  .then(response =>{
    res.render('animes/index',{
      title:"All Anime",
      results: response.data
    })
  })
}


function animeSearch(req, res) {
  axios.get(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=${req.body.search}`)
  .then(response => {
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