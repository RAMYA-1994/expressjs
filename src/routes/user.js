import{Router}from'express'
import UserController from'../controller/user.js'
const router=Router()

router.post('/ bookings ',UserController.getallusers)

export default router