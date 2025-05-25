import './LoginScreen.css';
import { useRef,useState } from 'react';
import { useNavigate} from "react-router-dom";
function LoginScreen({setIsAuth,setIsAdmin}) {
    const usernameRef=useRef(null)
    const passwordRef=useRef(null)
    const [errorMsg,setErrorMsg] = useState("") 
    const navigate = useNavigate();
    document.onsubmit = async (e) => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        const res = await fetch('http://localhost:8080/Users/checkUser', {
                'method': 'post',
                'headers': {
                'Content-Type': 'application/json'
                },
                'body': JSON.stringify(data)
                }
                )
        const result = await res.text();
        if(res.status==400){
          usernameRef.current.value = ""
          passwordRef.current.value= ""
          setErrorMsg('your username/password are uncorrect')
        }
        else{
          setIsAuth(true)
          if(result == 'user')
            navigate('/TimeEntry',{state:{username:usernameRef.current.value}})
          else
          {
            setIsAdmin(true)
            navigate('/Admin',{state:{username:usernameRef.current.value}})
          }
            
            

            }
        
    }
  return (
    <div className="loginScreen">
     <form>
            <div className='login-text' > Login</div>
            <div className='input-box'>
            <input type="text" id="username" placeholder='Username' ref={usernameRef}></input>
            </div>
            <div className='input-box'>
            <input type="password" id="password" placeholder='Password' ref={passwordRef} ></input>
            </div>
            <div className='div-submit-btn'>
            <input type="submit" value={"login"} className='submit-btn'></input>
            </div>
            
          </form>
          <div id="errorMsg">{errorMsg}</div>
    </div>
  );
}

export default LoginScreen;