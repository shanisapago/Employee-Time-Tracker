import { useRef } from "react"
import { useLocation } from "react-router-dom";
function EditScreen(){
    
    const {state} = useLocation()
    //console.log("state= "+state)
    //var str = JSON.stringify(state)
    //console.log(str)
    const{username,date,entry_time,exit_time}=state
    console.log("date="+date)
    console.log("entry="+entry_time)
    console.log("exit="+exit_time)
     
    const inputEntryRef = useRef(null);
    const inputExitRef = useRef(null);

    const save_btn = () =>{
        console.log(inputEntryRef.current.value)
        console.log(inputExitRef.current.value)
        const data = {
            username: username,
            date: date,
            entry_time:inputEntryRef.current.value,
            exit_time:inputExitRef.current.value

        }
        const res = fetch('http://localhost:8080/TimeEntries/editTimeEntries', {
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
            <div>
                <span id='username'>{username}</span>
                <span id='date'>{date}</span>

            </div>
            
            
            <input defaultValue={entry_time} ref={inputEntryRef}></input>
            <input defaultValue={exit_time} ref={inputExitRef}></input>
            <div>
                <button id='save_btn' onClick={save_btn}>save</button>
            </div>
        </div>

    );
}
export default EditScreen;