import React from 'react';


function form(props){
 
    return(
        <div className="form">
            <form className="regForm">
                
            <h1>Login to web App:</h1>
                <p>Login:</p>
                <input type="text" value={props.tempLogin} onChange={(event) => props.loginOnChange(event)}></input>
                <p>Password:</p>
                <input type="text" value={props.tempPassword} onChange={(event) => props.passwordOnChange(event)}></input>
                <button className="btn btn-primary" onClick = {(event) => props.submit(event)}>Confirm</button>

                
            </form>
        </div>
    )

  
   
}
export default form;