import express from 'express'
import Attendance from '../controller/AttendanceController.js'
const router = express.Router();

router.get('/Attendance',Attendance);
export default router;