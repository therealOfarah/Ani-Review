import { Router } from 'express'
import axios from "axios";

const router = Router()

router.get('/', function (req, res) {
  axios.get(`https://kitsu.io/api/edge/anime`)
  .then(response =>{
  res.render('index',{ 
    title: 'Home Page', 
    user: req.user ? req.user : null ,
    results: response.data
    })
})
})
export {
  router
}
