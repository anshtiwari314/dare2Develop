import React from 'react';
import "./Signup.css";
function Signup (){
    function prin(){
        if(document.getElementById('language'))
        document.getElementById('language').value=19;
        //console.log(document.getElementById('language').value);
    }
    // function sendData(event){
    //     event.preventDefault();
    //     if(document.getElementById('email')){
    //     console.log(document.getElementById('email').value);
    //     document.getElementById('email').value=" ";
    //     }
    // }
    
    return(
        <>
        <div className="header">
            <div className="logo">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
            </div>
            <div className="head" >
                <select id="language" name="language" >
                    <option value="English">English</option>
                    <option value="Hindi">हिन्दी</option>
                </select>
        
            </div>
            <div className="head"></div>
            
        </div>
        <form >
            <div>
                <input type="email" id="email" name="email" on/>
            </div>
            <input type="submit" />
        </form>
        
       
        </>
    );
}

export default Signup;