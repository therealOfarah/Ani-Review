import { Router } from 'express'
import * as animeCtrl from '../controllers/animes.js'
const router = Router()

router.get('/search',animeCtrl.animeSearch)
router.get('/:id',animeCtrl.show)
export {
  router
}
