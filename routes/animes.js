import { Router } from 'express'
import * as animeCtrl from '../controllers/animes.js'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.get('/',animeCtrl.index)
router.get('/search',animeCtrl.animeSearch)
router.get('/hottestanime',animeCtrl.hottestAnime)
router.get('/:id',animeCtrl.show)
// router.patch('/games/:id/addToCollection')
// router.patch('/games/:id/removeFromCollection')
// router.get('/new',isLoggedIn,animeCtrl.new)
// router.post('/:id',isLoggedIn,animeCtrl.addReview)
export {
  router
}
