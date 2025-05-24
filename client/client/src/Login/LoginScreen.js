import './LoginScreen.css';
import { useNavigate } from "react-router-dom";
function LoginScreen() {
    const navigate = useNavigate();
    document.onsubmit = async (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const data = {
            username: username,
            password: password
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
            document.getElementById('username').value = ''
            document.getElementById('password').value = ''
            document.getElementById('errorMsg').innerHTML= 'your username/password are uncorrect'
        }
        else{
          if(result == 'user')
            navigate('/TimeEntry',{state:{username:username}})
          else
            navigate('/Admin',{state:{username:username}})
            

            }
        
    }
  return (
    <div className="loginScreen">
     <form>
            <div className='login-text' > Login</div>
            <div className='input-box'>
            <input type="text" id="username" placeholder='Username'></input>
            </div>
            <div className='input-box'>
            <input type="password" id="password" placeholder='Password' ></input>
            </div>
            <div className='div-submit-btn'>
            <input type="submit" value={"login"} className='submit-btn'></input>
            </div>
            
          </form>
          <div id="errorMsg"></div>
    </div>
  );
}

export default LoginScreen;