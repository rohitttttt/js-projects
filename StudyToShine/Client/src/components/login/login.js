import React from 'react';  
import '../site.css';  
import { Button } from 'reactstrap';
import Register from '../register/register';
import API from "../../utils/api";

class Login extends React.Component {  

    constructor(props) {
        super(props);
    
        this.state = {
         token: null,
         value:'',
         passwd: '',
         showRegisterPopup: false
        };
        this.checkUser = this.checkUser.bind(this);
        this.handleEmailChange= this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
      }

      toggleRegisterPopup() {  
        this.setState({  
          showRegisterPopup: !this.state.showRegisterPopup  
        });  
         } 

      async checkUser() {
        // Load async data.
        console.log('email' + this.state.value + 'password' + this.state.passwd);
        let data = {
            email: this.state.value,
            password: this.state.passwd
        };
        let isUserExist;
        try
        {
         isUserExist = await API.post('/user/login', data);
        }
        catch(ex)
        {
            return alert('login failed');
        }
        if(isUserExist && isUserExist.data && isUserExist.data.status === "0")
        {
          this.setState({token : isUserExist.data.data.token})
          console.log('token' + isUserExist.data.data.token);
          alert('LoginSuccessfull');
          
        }
        else
        {
            alert('LoginFailed Please Check login id and password !!')
        }
      }
      handleEmailChange(event)
      {
        this.setState({value: event.target.value});
      }
      handlePasswordChange(event)
      {
        this.setState({passwd: event.target.value});
      }
  render() {  
return (  
         <div>
           <div className='popup'>
             <div className='popup\_inner-background'>
  <h1>{this.props.text}</h1>
             <div> 
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                     <h4 className="modal-title">Sign In</h4>
                    {/* <button type="button" className="close" data-dismiss="modal">&times;</button> */}
                    <Button onClick={this.props.closePopup} close></Button>  
                  </div>
                  <div className="modal-body">
                         <div className="form-group">
                           <label htmlFor="email">Email ID:</label>
                           <input type="email" className="form-control" id="email" autoComplete="off" value={this.state.value} onChange={this.handleEmailChange}/>
                         </div>
                         <div className="form-group">
                           <label htmlFor="pwd">Password:</label>
                           <input type="password" className="form-control" id="pwd" value={this.state.passwd} onChange={this.handlePasswordChange}/>
                         </div>
                         <div className="form-group form-check">
                           <label className="form-check-label">
                             <input className="form-check-input" type="checkbox"/> Keep Me Signed In
                           </label>
                         </div>
                         <div className="form-group">
                            <button type="submit" id="button-color" value="SIGN IN" className="btn" onClick={this.checkUser}>SIGN IN</button>                        
                            <a className="btn button-color" id="button-color"  onClick={this.toggleRegisterPopup.bind(this)}>Register Now</a>
                            {this.state.showRegisterPopup ?  
                            <Register  
                                      text=''  
                                      closePopup={this.toggleRegisterPopup.bind(this)}  
                            />  
                            : null  
                            }  
                         </div>
                         <a href="#">Forgot Password?</a>
                          
                         <div className="cust-social-log-wrap">
                             <div className="form-group text-center">OR CONTINUE WITH</div>
                             <div className="">
                                 <a className="social-link-background" href="#" id="facebookWidget"><img alt="fb-logo" src="https://ii1.pepperfry.com/images/svg/social-login-fb-logo.svg"/><span>Facebook</span></a>
                                 <a className="social-link-background" href="#" id="googleWidget"><img alt="gmail-logo" src="https://ii1.pepperfry.com/images/svg/social-login-google-logo.svg"/><span>Google</span></a>
                             </div>
                              {/* <div className="cust-social-error" style="display: none;"></div> */}
                         </div>                      
                  </div>
               </div>
             </div>
          </div>  
         </div>
         </div>
         </div>
)}}
export default Login;