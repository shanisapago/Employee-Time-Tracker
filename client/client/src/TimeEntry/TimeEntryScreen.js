import './TimeEntryScreen.css';
import { useLocation } from "react-router-dom"
import React from "react"
function TimeEntryScreen(){
    const {state} = useLocation()
    const{username}=state
    console.log("before")
    console.log(username)
    React.useEffect(()=>{
        async function getTime(){
          const res = await fetch('http://localhost:8080/TimeEntries/getTime', {
                'method': 'get',
                }
                )
        const result= await res.json();
        console.log("res")
        console.log(res)
        document.getElementById('date').innerText = result.date
        document.getElementById('time').innerText = result.time

    }
    getTime()
    // fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FBerlin')
    // .then(res=>res.json()).then(b=>
    //     {
    //         document.getElementById('date').innerText = b.date
    //         document.getElementById('time').innerText = b.time
    //     }).catch(err => {console.error("Fetch failed:", err)  });
      
        
    },[])
    const change_time = () =>{
        var time = document.getElementById("time")
        console.log("timr="+time.textContent)
        const arr_time = time.innerText.split(":")
        var hours = parseInt(arr_time[0])
        var minutes = parseInt(arr_time[1])
       
        if(time.textContent != '')
        {
            if(minutes<60)
            {
                minutes+=1
                if(hours<10)
                    hours="0"+hours
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
        
        
    }

    setInterval(change_time,60000)
    
    const entry_button = async () => {
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
        const res = await fetch('http://localhost:8080/TimeEntries/addEntryTime', {
                'method': 'post',
                'headers': {
                'Content-Type': 'application/json'
                },
                'body': JSON.stringify(data)
                }
                )
                console.log("status"+res.status)
        
    }
    const exit_button = async () => {
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
        const res = await fetch('http://localhost:8080/TimeEntries/addExitTime', {
                'method': 'post',
                'headers': {
                'Content-Type': 'application/json'
                },
                'body': JSON.stringify(data)
                }
                )
        if(res.status==400)
        {
            const error_msg=document.getElementsByClassName('error')[0]
            error_msg.innerHTML = 'End time cannot be before start time.'
        }
        
    }
        



    
    return(
        <div className="screen">
            <div className='div-top'>
                
            <span id='date'></span>
            <span id='time'></span>

            </div>
            
         

            <div>
                <button className="entry-btn" onClick={entry_button}>entry</button>
                <button className="exit-btn" onClick={exit_button}>exit</button>

            </div>
            <div className='error'></div>
            

        </div>
        





    );

}
export default TimeEntryScreen;
