import { Anime } from '../models/anime.js'
import { Review } from '../models/Review.js'

function create(req, res){
  req.body.author = req.user.profile._id
  req.body.anime = req.params._id
  Review.create(req.body)
  .then((review)=>{
    Anime.findById(req.params.id)
    .then((anime)=>{
      anime.review.push(review._id)
      anime.save()
      .then(()=>{
        res.redirect(`/animes/${anime.animeId}`)
      })
  })
  })
}
export {  
  create
}
