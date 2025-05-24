import usersModel from '../models/timeEntries.js'
async function addEntryTime(req,res){
    console.log("in controllers")
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
    console.log("result")
    console.log(result)
    res.send(result)
}
function editTimeEntries(req,res)
{
    usersModel.editTimeEntries(req.body.username,req.body.date,req.body.entry_time,req.body.exit_time)
  
}
async function getTime(req,res)
{
    const result = await usersModel.getTime()
    res.send(result)
}
export{
    addEntryTime,addExitTime,getTimeEntries,editTimeEntries,getTime

}