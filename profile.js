import express from 'express'
const router = express.Router();
import fetchProfileData from '../controller/profileController.js'
 
router.get("/Student__c",fetchProfileData)
export default router