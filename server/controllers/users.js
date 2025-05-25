import usersModel from '../models/users.js'
function checkUser(req, res) {
    const role = usersModel.checkUser(req.body.username,req.body.password)
    if(role === "")
    {

        res.status(400)
        res.send()

    }
        
    else
        res.send(role)

}

export{
    checkUser

}