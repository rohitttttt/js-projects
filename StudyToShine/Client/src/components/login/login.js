import React from 'react';  
import '../site.css';  
import { Button } from 'reactstrap';

class Login extends React.Component {  
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
                      <label for="email">Email address:</label>
                      <input type="email" className="form-control" id="email" autocomplete="off"/>
                    </div>
                    <div className="form-group">
                      <label for="pwd">Password:</label>
                      <input type="password" className="form-control" id="pwd"/>
                    </div>
                    <div className="form-group form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox"/> Remember me
                      </label>
                    </div>
                    <button type="submit" className="btn button-color">Register</button>
              </div>

</div>  
</div> 

)}}
export default Login;