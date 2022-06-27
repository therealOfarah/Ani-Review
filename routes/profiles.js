import { Router } from 'express'
import * as profileCrtl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.get('/',profileCrtl.index)
router.get('/:id',profileCrtl.show)
router.get('/:id/edit',isLoggedIn,profileCrtl.edit)
router.put('/:id',isLoggedIn,profileCrtl.update)
export {
  router
}
