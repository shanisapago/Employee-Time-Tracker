import users from '../users.json' assert { type: 'json' }
import timeEntries from '../timeEntries.json' assert { type: 'json' }
import fs from 'fs'
function checkUser(username,password)
{
   console.log("in models")
    var role="";
    users.forEach(element => {
        console.log("username="+username+" pass"+password)
        if(element.username==username && element.password == password)
        {
            console.log("here")
            role = element.role;
        }

        
            
    });
    console.log("role"+role)
    return role;


}
function addEntryTime(username,date,time)
{
    console.log("in models")
    console.log(username)
    console.log(date)
    console.log(time)
    const timeEntry={
        "username":username,
        "date":date,
        "entry_time":time,
        "exit_time":''
    }
    fs.readFile('timeEntries.json','utf8',(err1,data)=>
    {
        if(err1)
            console.log(err1)
        console.log(data)
        const d=JSON.parse(data)
        d.push(timeEntry)
        fs.writeFile('timeEntries.json' ,JSON.stringify(d,null,2),'utf8',(err)=>console.log(err))


    });
    
}
export default {
    checkUser,addEntryTime
 
}