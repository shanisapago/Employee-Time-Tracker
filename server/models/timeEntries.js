import fs from 'fs'
import timeEntries from '../timeEntries.json' assert { type: 'json' }
function addEntryTime(username,date,time)
{
    console.log("in models")
    console.log(username)
    console.log(date)
    console.log(time)
    const timeEntry={
        "date":date,
        "entry_time":time,
        "exit_time":''
    }
    fs.readFile('timeEntries.json','utf8',(err1,data)=>
    {
        if(err1)
            console.log(err1)
        console.log(data)
        const timeEntriesArray=JSON.parse(data)
        //timeEntriesArray.push(timeEntry)
        var flag=false
        timeEntriesArray.forEach(element => {
            
            console.log("keyyyy="+Object.keys(element)[0])
            console.log(username)
            if(Object.keys(element)[0]==username){
                flag=true
                element[Object.keys(element)[0]].push(timeEntry)
            }


        
            
        });
        
        if(!flag)
        {
            const arr = []
            arr.push(timeEntry)
            const new_user = {[username]:arr}
            timeEntriesArray.push(new_user)
            
        }
        fs.writeFile('timeEntries.json' ,JSON.stringify(timeEntriesArray,null,2),'utf8',(err)=>console.log(err))


    });
    
}
function addExitTime(username,date,time){
     fs.readFile('timeEntries.json','utf8',(err1,data)=>
    {
        if(err1)
            console.log(err1)
        console.log(data)
        const timeEntriesArray=JSON.parse(data)
        timeEntriesArray.forEach(element => {
            if(Object.keys(element)[0]==username)
            {
                element[Object.keys(element)[0]].forEach(j=>{
                    if(j.date==date)
                        j.exit_time=time;
                })
                
            }
            
        });
        fs.writeFile('timeEntries.json' ,JSON.stringify(timeEntriesArray,null,2),'utf8',(err)=>console.log(err))


        


    });

}
function getTimeEntries(){
    return timeEntries

}
function editTimeEntries(username,date,entry_time,exit_time){
     fs.readFile('timeEntries.json','utf8',(err1,data)=>
    {
        if(err1)
            console.log(err1)
        console.log(data)
        const timeEntriesArray=JSON.parse(data)
        timeEntriesArray.forEach(element => {
            if(Object.keys(element)[0]==username)
            {
                element[Object.keys(element)[0]].forEach(j=>{
                    if(j.date==date)
                    {
                        j.entry_time=entry_time
                        j.exit_time=exit_time

                    }
                        
                })
                
            }
            
        });
        fs.writeFile('timeEntries.json' ,JSON.stringify(timeEntriesArray,null,2),'utf8',(err)=>console.log(err))

    });

}
export default {
    addEntryTime,addExitTime,getTimeEntries,editTimeEntries
 
}