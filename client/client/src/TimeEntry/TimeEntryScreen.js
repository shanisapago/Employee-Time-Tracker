import { useLocation } from "react-router-dom"
import React from "react"
function TimeEntryScreen(){
    const {state} = useLocation()
    const{username}=state
    console.log("before")
    console.log(username)
     React.useEffect(()=>{
    fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FBerlin')
    .then(res=>{res.json().then(b=>
        {
            document.getElementById('date').innerText = b.date
            document.getElementById('time').innerText = b.time
        })
        
        
    })},[])
    const change_time = () =>{
        var time = document.getElementById("time")
        console.log(time)
        const arr_time = time.innerText.split(":")
        var hours = parseInt(arr_time[0])
        var minutes = parseInt(arr_time[1])
        if(minutes<60)
        {
            minutes+=1
            if(minutes<10)
                time.innerHTML = hours+":0"+minutes
            else
                time.innerHTML = hours+":"+minutes
        }
        else{
            if(hours<23)
            {
                hours+=1
                if(hours<10)
                    time.innerHTML = "0"+hours+":00"
                else
                    time.innerHTML = hours+":00"
            }
            else{
                time.innerHTML = "00:00"
            }
            

        }
        
    }

    setInterval(change_time,60000)
    
    const entry_button = () => {
        console.log("in on click button")
        const date = document.getElementById("date").innerText
        const time = document.getElementById("time").innerText
        console.log(date)
        console.log(time)
        const data = {
            username:username,
            date: date,
            time: time
        }
        const res = fetch('http://localhost:8080/TimeEntries/addEntryTime', {
                'method': 'post',
                'headers': {
                'Content-Type': 'application/json'
                },
                'body': JSON.stringify(data)
                }
                )
        
    }
    const exit_button = () => {
        console.log("in on click button")
        const date = document.getElementById("date").innerText
        const time = document.getElementById("time").innerText
        console.log(date)
        console.log(time)
        const data = {
            username:username,
            date: date,
            time: time
        }
        const res = fetch('http://localhost:8080/TimeEntries/addExitTime', {
                'method': 'post',
                'headers': {
                'Content-Type': 'application/json'
                },
                'body': JSON.stringify(data)
                }
                )
        
    }
        



    
    return(
        <div>
            <span id='date'></span>
            
            <span id='time'></span>
            <div>
                <button onClick={entry_button}>entry</button>
                <button onClick={exit_button}>exit</button>

            </div>
            

        </div>
        





    );

}
export default TimeEntryScreen;
