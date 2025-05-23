import express from 'express'
import {addEntryTime,addExitTime,editTimeEntries,getTimeEntries} from '../controllers/timeEntries.js'
const router = express.Router();
console.log("in routes")
router.post('/addEntryTime', addEntryTime);
router.post('/addExitTime', addExitTime);
router.get('/getTimeEntries',getTimeEntries);
router.post('/editTimeEntries',editTimeEntries);
export default router;