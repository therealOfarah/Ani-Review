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
  // console.log("ANIME SEARCH REQ",req)
  // console.log("ANIME SEARCH REQ ROUTE",req.route)
  // console.log("ANIME SEARCH REQ QUERY",req.query)
  console.log("ANIME SEARCH REQ QUERY SEARCH",req.query.search)
  // console.log("ANIME SEARCH REQ PATH",req.path)

  axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${req.query.search}`)
  .then(response => {
  console.log("ANIME SEARCH RESPONSE",response)
  console.log("ANIME SEARCH RESPONSE DATA",response.data)

    res.render('animes/search', {
      title: 'Search Results',
      search: req.body.search ? req.body.search : null,
      results: response.data,
    })
  })
}

function hottestAnime(req,res){
  
}
export{
  animeSearch,

  index,
  hottestAnime
}