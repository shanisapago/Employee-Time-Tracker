import usersModel from '../models/users.js'
function checkUser(req, res) {
    console.log("in controllers")
    const role = usersModel.checkUser(req.body.username,req.body.password)
    console.log("controller role"+role)
    if(role === "")
    {

        res.status(400)
        res.send()

    }
        
    else
        res.send(role)

}
function addEntryTime(req,res){
    console.log("in controllers")
    usersModel.addEntryTime(req.body.username,req.body.date,req.body.time)
    res.send()
}
export{
    checkUser,addEntryTime

}