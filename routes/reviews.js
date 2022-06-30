import { Router } from 'express'
import * as reviewsCtrl from "../controllers/reviews.js"
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.put('/:id', reviewsCtrl.create)

export {
  router
}