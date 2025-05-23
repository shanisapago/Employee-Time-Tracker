import express from 'express'
import {checkUser} from '../controllers/users.js'
const router = express.Router();
console.log("in routes")
router.post('/checkUser', checkUser);



export default router;