import { Router } from 'express'
import * as animeCtrl from '../controllers/animes.js'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.get('/', animeCtrl.index)
router.get('/search', animeCtrl.animeSearch)
router.get('/hottestanime', animeCtrl.hottestAnime)
router.get('/:id', animeCtrl.show)
// router.post("/", animeCtrl.create)
export {
  router
}
