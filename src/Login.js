import React from 'react';
import './Login.css'; 

function Login(){
    function authenticate(event){
        event.preventDefault();

    }
    return(<div className="wrap">
        <div className="wrapper">
        <div className="header">
            <div className="logo">
                <a href="#"> <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo"/></a>
            </div>
        </div>
        <div className="login_body">
            <div className="login_box">
                <h2>Sign in</h2>
                <form onSubmit={authenticate}>
                    <div className="input_wrap">
                        <input type="email" placeholder="Email" id="username"/>
                    </div>
                    <div className="input_wrap">
                        <input type="text" placeholder="Password" id="password"/>
                    </div>
                    <div className="input_wrap">
                        <button type="submit" value="Submit">Sign in</button>
                    </div>
                    <div className="support">
                        <div className="remember">
                            <div><input type="checkbox"/>Remember me</div>
                            
                        </div>
                        <div className="need_help">
                            <p>Need help?</p>
                        </div>
                    </div>
                    <div className="login_footer">
                        <div className="login_facebook">
                            <span><i className="fa fa-facebook-square"></i></span>
                            <span><a href="#">Login with Facebook</a></span>
                        </div>
                        <div className="sign_up">
                            <p>New to Netflix?<a href="#">Sign up Now.</a></p>
                        </div>
                        <div className="terms">
                            <p>This page is protected by 
                            Google reCAPTCHA to ensure 
                            you're not a bot.
                            <a href="#">Learn more</a></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>    
        <div className="footer">
                <div className="footerin">
                    <div className="foot1">
                        <p>Questions? Call 1-800-040-4015</p>
                    </div>
                    <div className="foot2">
                        <div className="inner">
                            <a href="#">FAQ</a>
                            <a href="#">Help Centre</a>
                            <a href="#">Terms of Use</a>
                            <a href="#">Privacy</a>
                        </div>
                    </div>
                    <div className="foot3">
                        <div className="inner">
                            <a href="#">Cookie Preferences</a>
                            <a href="#">Corporate Information</a>
                            <a></a>
                            <a></a>1
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>);
    
}
export default Login;