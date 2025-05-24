import React from "react"
import './AdminScreen.css'
import { useNavigate,useLocation } from "react-router-dom";
console.log("hiiii")
function AdminScreen(){
    const navigate = useNavigate();
    const {state} = useLocation()
    const{username}=state
    React.useEffect(()=>{
        
        console.log("FETCH CALLED")
        fetch('http://localhost:8080/TimeEntries/getTimeEntries', {
                'method': 'get',
                }
                ).then(res=>{
                    console.log("res = "+res)
                    res.json().then(result=>{
                        console.log("result = "+result)
                    result.forEach(element => {
                        const username_lst = Object.keys(element)[0]
                        console.log("in for each "+username_lst)
                        const main_div = document.getElementById('main_div')
                        const username_div = document.createElement('div')
                        username_div.setAttribute('class','username-admin')
                        username_div.appendChild(document.createTextNode(username_lst))
                        main_div.appendChild(username_div)
                        const table = document.createElement('table')
                        table.setAttribute('class','content-table')
                        var row = table.insertRow(0);
                        row.setAttribute('class','table-head')
                        var date_cell = row.insertCell(0);
                        var entry_time_cell = row.insertCell(1);
                        var exit_time_cell = row.insertCell(2);
                        date_cell.innerHTML = 'Date'
                        entry_time_cell.innerHTML = 'Entry Time'
                        exit_time_cell.innerHTML = 'Exit Time'
                        main_div.appendChild(table)
                       
                        var rows_numbers=1
                        element[Object.keys(element)[0]].forEach(json_entry => {
                            const date = json_entry.date
                            const entry_time = json_entry.entry_time
                            const exit_time = json_entry.exit_time
                            var row2 = table.insertRow(rows_numbers);
                            
                            var date_cell2 = row2.insertCell(0);
                            var entry_time_cell2 = row2.insertCell(1);
                            var exit_time_cell2 = row2.insertCell(2);
                            var button_cell2 = row2.insertCell(3);
                            const edit_button = document.createElement('button')
                            date_cell2.innerHTML = date
                            date_cell2.setAttribute('class','date')
                            entry_time_cell2.innerHTML = entry_time
                            entry_time_cell2.setAttribute('class','entry_time')
                            exit_time_cell2.innerHTML = exit_time
                            exit_time_cell2.setAttribute('class','exit_time')
                            edit_button.textContent='Edit'
                                
                            button_cell2.appendChild(edit_button)
                            edit_button.onclick=function(){
                                var parent_edit = button_cell2.parentElement
                                var date_edit = parent_edit.getElementsByClassName('date')
                                var entry_edit = parent_edit.getElementsByClassName('entry_time')
                                var exit_edit = parent_edit.getElementsByClassName('exit_time')
                                console.log("dddddd="+parent_edit.innerHTML)
                                var date_edit_txt = date_edit[0].textContent
                                var entry_edit_txt = entry_edit[0].textContent
                                var exit_edit_txt = exit_edit[0].textContent
                                
                                navigate('/Edit',{state:{username:username_div.textContent,date: date_edit_txt,
                                    entry_time: entry_edit_txt,
                                    exit_time:exit_edit_txt}}
                                );
                                
                                

                            }
                            rows_numbers +=1
                            

                            
                        });
                          });
                    
                })
                  
                })

    },[])
    




    return(
        <div id = 'main_div'>
            
            

        </div>
        

        

    );
}
export default AdminScreen;