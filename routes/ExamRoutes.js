import express from 'express';
import result from '../controller/ExamController.js'
 const router = express.Router()
 router.get('/result',result)
 export default router;
