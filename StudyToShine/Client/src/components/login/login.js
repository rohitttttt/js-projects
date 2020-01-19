import React from 'react';  
import '../site.css';  
import { Button } from 'reactstrap';
import API from "../../utils/api";

class Login extends React.Component {  

    constructor(props) {
        super(props);
    
        this.state = {
         token: null,
         value:'',
         passwd: ''
        };
        this.checkUser = this.checkUser.bind(this);
        this.handleEmailChange= this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
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
        if(isUserExist && isUserExist.data && isUserExist.data.status === "success")
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
<div className='popup'>  
<div className='popup\_inner inner-background'>  
<h1>{this.props.text}</h1>  
<div className="modal-header header-color">
                <h4 className="modal-title">Signup</h4>
                <Button onClick={this.props.closePopup} close></Button>  
              </div>
              <div className="modal-body">
                    <div className="form-group">
                      <label >Email address:</label>
                      <input type="email" className="form-control" id="email" value={this.state.value} onChange={this.handleEmailChange}/>
                    </div>
                    <div className="form-group">
                      <label >Password:</label>
                      <input type="password" className="form-control" id="pwd" value={this.state.passwd} onChange={this.handlePasswordChange}/>
                    </div>
                    <div className="form-group form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox"/> Remember me
                      </label>
                    </div>
                    <button type="submit" className="btn button-color" onClick={this.checkUser}>Register</button>
              </div>

</div>  
</div> 

)}}
export default Login;