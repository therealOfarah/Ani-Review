import { Router } from 'express'
import axios from "axios";

const router = Router()

router.get('/', function (req, res) {
  axios.get(`https://kitsu.io/api/edge/anime?page%5Blimit%5D=20r&page%5Boffset%5D=0`)
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
