import { Anime } from "../models/anime.js";
import axios from "axios";

function index(req,res){
  axios.get(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=20r&page%5Boffset%5D=0`)
  .then(response =>{
    res.render('animes/index',{
      title:"All Anime",
      animeId: response.data
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/`)
  })
}


function animeSearch(req, res) {
  axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${req.query.search}`)
  .then(response => {
    res.render('animes/search', {
      title: 'Search Results',
      search: req.body.search ? req.body.search : null,
      animeId: response.data,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/`)
  })
}
function create(req,res){
  axios.get(`https://kitsu.io/api/edge/anime/${req.params.id}`)
  .then(response =>{
    Anime.create(response.data)
    .then(anime=> {
      anime.push(response.data)
      anime.save()
      console.log("***********",anime.id)
      res.redirect(`/animes/${anime.id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/`)
  })
}

function show(req,res){
  axios.get(`https://kitsu.io/api/edge/anime/${req.params.id}`)
  .then(response =>{
    Anime.find({})
    .then((anime =>{
      // anime.push(response.data)
      // anime.save()
      // console.log("**********Anime",anime)
      res.render("animes/show",{
        title: "Leave A comment",
        animeId: response.data,
        anime,
      })
    }))
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/`)
  })
}


function hottestAnime(req,res){
  axios.get(`https://kitsu.io/api/edge/anime?sort=popularityRank`)
  .then(response =>{
    res.render('animes/hottest',{
      title:"All Anime",
      animeId: response.data
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/`)
  })
}



export{
  animeSearch,
  show,
  index,
  hottestAnime,
  create
  // newComment

}