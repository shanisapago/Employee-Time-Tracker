import users_router from './routes/users.js'
import timeEntries_router from './routes/timeEntries.js'
import express from 'express'
import cors from 'cors'
const  server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors())
server.use('/Users', users_router);
server.use('/TimeEntries', timeEntries_router);
server.listen(8080)