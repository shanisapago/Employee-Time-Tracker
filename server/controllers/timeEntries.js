import usersModel from '../models/timeEntries.js'
async function addEntryTime(req,res){
    var result = await usersModel.addEntryTime(req.body.username,req.body.date,req.body.time)
    if(result == -1)
        res.status(400)
    res.send()
}
async function addExitTime(req,res){
    var result = await usersModel.addExitTime(req.body.username,req.body.date,req.body.time)
    if(result==-1)
        res.status(400)
    res.send()
}
async function getTimeEntries(req,res){
    const result = await usersModel.getTimeEntries()
    res.send(result)
}
async function editTimeEntries(req,res)
{
    await usersModel.editTimeEntries(req.body.username,req.body.date,req.body.prev_entry_time,req.body.prev_exit_time,req.body.entry_time,req.body.exit_time)
    res.send()
  
}
async function getTime(req,res)
{
    const result = await usersModel.getTime()
    res.send(result)
}
export{
    addEntryTime,addExitTime,getTimeEntries,editTimeEntries,getTime

}