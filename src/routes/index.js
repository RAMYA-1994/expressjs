import{Router}from'express'
import UseRouter from'./user.js'
const router=Router()

router.use('/user',UserRouter)
export default router