import { Router } from 'express'
import * as animeCtrl from '../controllers/animes.js'
const router = Router()

router.get('/',animeCtrl.index)
router.get('/search',animeCtrl.animeSearch)
router.get('/hottestanime',animeCtrl.hottestAnime)
// router.get('/:id',animeCtrl.show)
export {
  router
}
