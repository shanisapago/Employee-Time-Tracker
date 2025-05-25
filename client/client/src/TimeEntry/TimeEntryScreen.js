import './TimeEntryScreen.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation,useNavigate } from "react-router-dom"
import { IoLogOutOutline } from "react-icons/io5";
function TimeEntryScreen({setIsAuth}){
    const navigate = useNavigate();
    const {state} = useLocation()
    const{username}=state
    const [date,setDate] = useState("")
    const [time,setTime] = useState("")
    const timeRef = useRef(null)
    useEffect(()=>{
    timeRef.current=time
    },[time])
    useEffect(()=>{
      
        async function getTime(){
          const res = await fetch('http://localhost:8080/TimeEntries/getTime', {
                'method': 'get',
                }
                )
        const result= await res.json();
        setDate(result.date)
        setTime(result.time)
       
        

    }
    getTime()     
        
    },[])

    const change_time = () =>{
        
       
        const current_time = timeRef.current
        if(current_time!=null)
        {
            const arr_time = current_time.split(":")
            var hours = parseInt(arr_time[0])
            var minutes = parseInt(arr_time[1])
       
            if(current_time != '')
            {
                if(minutes<59)
                {
                    minutes+=1
                    if(hours<10)
                        hours="0"+hours
                    if(minutes<10)
                        setTime (hours+":0"+minutes)
                    else
                        setTime(hours+":"+minutes)
                }
                else{
                    if(hours<23)
                    {
                        hours+=1
                
                        if(hours<10)
                            setTime("0"+hours+":00")
                        else
                            setTime(hours+":00")
                    }
                    else{
                        setTime("00:00")
                    }
            

                    }

            }

        }
        
        
        
    }
    useEffect(()=>{setInterval(change_time,60000)},[])
   
  
   
    
    const entry_button = async () => {
        const current_time=timeRef.current
        
        const data = {
            username:username,
            date: date,
            time: current_time
        }
        const res = await fetch('http://localhost:8080/TimeEntries/addEntryTime', {
                'method': 'post',
                'headers': {
                'Content-Type': 'application/json'
                },
                'body': JSON.stringify(data)
                }
                )
                const error_msg=document.getElementsByClassName('error')[0]
                if(res.status==400)
                {
                    error_msg.innerHTML = 'Please enter exit time'
                }
                else{
                    error_msg.innerHTML =''
                }
        
    }
    const exit_button = async () => {
        const current_time=timeRef.current
        
        const data = {
            username:username,
            date: date,
            time: current_time
        }
        const res = await fetch('http://localhost:8080/TimeEntries/addExitTime', {
                'method': 'post',
                'headers': {
                'Content-Type': 'application/json'
                },
                'body': JSON.stringify(data)
                }
                )
         const error_msg=document.getElementsByClassName('error')[0]
        if(res.status==400)
        {
            error_msg.innerHTML = 'End time cannot be before start time.'
        }

        else
            error_msg.innerHTML =''
        
    }
    const logout = ()=>{
        setIsAuth(false)
        navigate('/')
    }
        



    
    return(
        <div className="screen">
            <div >
                <button className='logout-btn' onClick={logout}>
                <IoLogOutOutline  className='logout-icon'/>
            </button>

            </div>
            
             

            <div className='div-top'>
                
            <span id='date'>{date}</span>
            <span id='time'>{time}</span>

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
