import usersModel from '../models/timeEntries.js'
function addEntryTime(req,res){
    console.log("in controllers")
    usersModel.addEntryTime(req.body.username,req.body.date,req.body.time)
    res.send()
}
function addExitTime(req,res){
    usersModel.addExitTime(req.body.username,req.body.date,req.body.time)
    res.send()
}
function getTimeEntries(req,res){
    const result = usersModel.getTimeEntries()
    console.log("result")
    console.log(result)
    res.send(result)
}
function editTimeEntries(req,res)
{
    usersModel.editTimeEntries(req.body.username,req.body.date,req.body.entry_time,req.body.exit_time)
  
}
export{
    addEntryTime,addExitTime,getTimeEntries,editTimeEntries

}