import express from 'express'
import {addEntryTime,addExitTime,editTimeEntries,getTimeEntries,getTime} from '../controllers/timeEntries.js'
const router = express.Router();
router.post('/addEntryTime', addEntryTime);
router.post('/addExitTime', addExitTime);
router.get('/getTimeEntries',getTimeEntries);
router.post('/editTimeEntries',editTimeEntries);
router.get('/getTime',getTime);
export default router;