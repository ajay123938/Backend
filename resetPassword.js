import express from 'express'
import resetPassword from './controller/resetPasswordController.js'
const router =  express.Router()


router.post("/resetPassword",resetPassword)
export default router;