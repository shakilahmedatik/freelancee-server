import express from 'express'
import formidable from 'express-formidable'
// middleware
import { requireSignin } from '../middlewares'
// controllers
import { create } from '../controllers/hotel'

const router = express.Router()

router.post('/create-hotel', requireSignin, formidable(), create)

module.exports = router
