import express from 'express'
import {checkUser} from '../controllers/users.js'
const router = express.Router();
router.post('/checkUser', checkUser);



export default router;