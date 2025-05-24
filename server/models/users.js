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

export default {
    checkUser
 
}