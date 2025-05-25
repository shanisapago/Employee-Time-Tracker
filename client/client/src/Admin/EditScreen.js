import './EditScreen.css'
import { useRef,useState  } from "react"
import { useLocation,useNavigate} from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";



function EditScreen({setIsAuth,setIsAdmin}){
    const navigate = useNavigate();
    const {state} = useLocation()
    const{username,date,entry_time,exit_time}=state  
    const [entryTime,setEntryTime] = useState(entry_time)
    const inputEntryRef = useRef(null);
    const inputExitRef = useRef(null);
    

    const save_btn = async () =>{
        const data = {
            username: username,
            date: date,
            prev_entry_time:entry_time,
            prev_exit_time:exit_time,
            entry_time:inputEntryRef.current.value,
            exit_time:inputExitRef.current.value

        }
        const res = await fetch('http://localhost:8080/TimeEntries/editTimeEntries', {
                'method': 'post',
                'headers': {
                'Content-Type': 'application/json'
                },
                'body': JSON.stringify(data)
                }
                )
        if(res)
            navigate('/Admin')
    }
    const logout = ()=>{
        setIsAuth(false)
        setIsAdmin(false)
        navigate('/')
    }
    
    
    
    return(
        <div className='screen'>
            <div >
                <button className='logout-btn' onClick={logout} >
                <IoLogOutOutline  className='logout-icon'/>
            </button>
            </div>
            <div className='div-top-edit'>
                <span id='username-edit'>{username}</span>
                <span id='date-edit'>{date}</span>

            </div>
          
            
            
            <div className='input-box'>
            <input type='time' defaultValue={entry_time} ref={inputEntryRef} placeholder='entry time'></input>
            </div>
            <div className='input-box'>
            <input type='time' defaultValue={exit_time} ref={inputExitRef} placeholder='exit time'></input>
            </div>
            <div className='div-submit-btn div-submit-btn-up'>
                <button id='save_btn' onClick={save_btn}>save</button>
            </div>
        </div>

    );
}
export default EditScreen;