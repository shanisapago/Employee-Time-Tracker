import fs from 'fs'
import timeEntries from '../timeEntries.json' assert { type: 'json' }
import fetch from 'node-fetch';

async function addEntryTime(username,date,time)
{
    const timeEntry={
        "date":date,
        "entry_time":time,
        "exit_time":''
    }
    return fs.promises.readFile('timeEntries.json').then(data=>
    {
      
        const timeEntriesArray=JSON.parse(data)
        //timeEntriesArray.push(timeEntry)
        var flag=false
        var count = 0
        timeEntriesArray.forEach(element => {
            if(Object.keys(element)[0]==username){
                flag=true
                element[Object.keys(element)[0]].forEach(e => {
                    if(e.date==date&&e.exit_time=='')
                        count++
  
                });
                if(count==0)
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
        if(count==0)
            fs.writeFile('timeEntries.json' ,JSON.stringify(timeEntriesArray,null,2),'utf8',(err)=>{if(err)console.log(err)})
        else
            return -1


    });
    
}
async function addExitTime(username,date,time){
    var flag = false
     return fs.promises.readFile('timeEntries.json').then(data=>
    {
        
    
        const timeEntriesArray=JSON.parse(data)
        timeEntriesArray.forEach(element => {
            if(Object.keys(element)[0]==username)
            {
                for(var i=element[Object.keys(element)[0]].length-1;i>=0;i--)
                {
                    var j = element[Object.keys(element)[0]][i]
                     if(j.date==date&&j.exit_time=='')
                    {
                        j.exit_time=time;
                        flag=true
                        break

                    }

                }
               
                
            }
            
        });
        if(flag)
            fs.writeFile('timeEntries.json' ,JSON.stringify(timeEntriesArray,null,2),'utf8',(err)=>{if(err)console.log(err)})
        else
            return -1


    });

}
async function getTimeEntries(){
    return fs.promises.readFile('timeEntries.json').then(data=>{
        return JSON.parse(data)
        

    }
);

}
async function editTimeEntries(username,date,prev_entry_time,prev_exit_time,entry_time,exit_time){
     return fs.promises.readFile('timeEntries.json').then(data=>
    {
       
        const timeEntriesArray=JSON.parse(data)
        timeEntriesArray.forEach(element => {
            if(Object.keys(element)[0]==username)
            {
                element[Object.keys(element)[0]].forEach(j=>{
                    if(j.date==date&&j.entry_time==prev_entry_time&&j.exit_time==prev_exit_time)
                    {
                        j.entry_time=entry_time
                        j.exit_time=exit_time

                    }
                        
                })
                
            }
            
        });
        fs.writeFile('timeEntries.json' ,JSON.stringify(timeEntriesArray,null,2),'utf8',(err)=>{if(err)console.log(err)})
        return;

    });

}
async function getTime(){
    try{

        const result = await fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FBerlin')
        const b = await result.json()
        const data ={
                "date":b.date,
                "time":b.time
            }
            return data
       
    }
    catch(error){
        
        console.log(error)
    }
    

}
export default {
    addEntryTime,addExitTime,getTimeEntries,editTimeEntries,getTime
 
}