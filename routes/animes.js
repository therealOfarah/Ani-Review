import { Router } from 'express'
import * as animeCtrl from '../controllers/animes.js'
const router = Router()

router.post('/search',animeCtrl.animeSearch)

export {
  router
}
