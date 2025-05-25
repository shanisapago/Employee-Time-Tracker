import users from '../users.json' assert { type: 'json' }
import timeEntries from '../timeEntries.json' assert { type: 'json' }
import fs from 'fs'
function checkUser(username,password)
{
    var role="";
    users.forEach(element => {
        if(element.username==username && element.password == password)
        {
            role = element.role;
        }

        
            
    });
    return role;


}

export default {
    checkUser
 
}