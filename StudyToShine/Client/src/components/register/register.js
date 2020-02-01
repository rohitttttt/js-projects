import React from 'react';
import '../site.css';
import API from "../../utils/api";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state ={
           email:'',
           mobile:'',
           firstName:'',
           lastName:'',
           passwd:'',
           cnfPasswd:'',
           gender:'',
           role:'',
           signupas:'',
           isExistUser:'',
           username:'',
           userPasswd:'',
           level:''
        };
        this.checkPasswordMatch = this.checkPasswordMatch.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMobileChange = this.handleMobileChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePasswdChange = this.handlePasswdChange.bind(this);
        this.handleCnfPasswdChange = this.handleCnfPasswdChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleRoleChange=this.handleRoleChange.bind(this);
        this.handleSignupasChange = this.handleSignupasChange.bind(this);
        this.handleIsExistUserChange = this.handleIsExistUserChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleUserPasswdChange = this.handleUserPasswdChange.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
    }
    async checkPasswordMatch(){
      console.log('password-'+ this.state.passwd + 'confirm password-'+ this.state.cnfPasswd);
      let passwd = this.state.passwd.trim();
      let confirmPasswd = this.state.cnfPasswd.trim();
      if(passwd && confirmPasswd != '' || passwd != confirmPasswd ){
          alert('password do not match');
      }
    }

    async registerUser(){
        console.log('email-' + this.state.email + 'password-' + this.state.passwd + 'confirm password-' + this.state.cnfPasswd + 
        'mobile-' + this.state.mobile+ 'gender-'+ this.state.gender + 'signupas-'+this.state.signupas + 'isExistUser-'+
         this.state.isExistUser + 'username-'+this.state.username + 'userPasswd-' + this.state.userPasswd+'level-'+
         this.state.level
        );

        let data ={
            email : this.state.email,
            password: this.state.passwd,
            mobile:this.state.mobile,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            gender:this.state.gender,
            signupRole:this.state.role,
            existingUser:this.state.isExistUser,
            parentUsername:this.state.username,
            parentPassword:this.state.userPasswd,
            level:this.state.level
        };

        let userRegistered;
        try
        {
          debugger;  
          userRegistered = await API.post('/user/register', data);
        }
        catch(ex)
        {
            return alert('user registration failed!');
        }
        debugger;
        if(userRegistered && userRegistered.data && userRegistered.data.status === "success")
        {
          alert('Registration Successfull!');          
        }
        else
        {
            alert('Registration Failed Please Check login id and password !!')
        }
    }
    
    handleEmailChange(event){
        this.setState({email:event.target.value});
    }
    handleMobileChange(event){
        this.setState({mobile:event.target.value});
    }
    handleFirstNameChange(event){
        this.setState({firstName:event.target.value});
    }
    handleLastNameChange(event){
        this.setState({lastName:event.target.value});
    }
    handlePasswdChange(event){
        this.setState({passwd:event.target.value});
    }
    handleCnfPasswdChange(event){
        this.setState({cnfPasswd:event.target.value});
    }
    handleGenderChange(event){
        this.setState({gender:event.target.value});
    }
    handleRoleChange(event){
      this.setState({role : event.target.value});
    }
    handleSignupasChange(event){
        this.setState({signupas:event.target.value});
    }
    handleIsExistUserChange(event){
        this.setState({isExistUser:event.target.value});
    }
    handleUsernameChange(event){
        this.setState({username:event.target.value});
    }
    handleUserPasswdChange(event){
        this.setState({userPasswd:event.target.value});
    }
    handleLevelChange(event){
        this.setState({level:event.target.value});
    }


    render() {
        return (
            <div>
              <a href="/" className="btn button-color" id="btnRegister" data-toggle="modal" data-backdrop="static" data-target="#signupPopupBox" data-keyboard="false">Register Now</a>
              <div className="modal fade" id="signupPopupBox"> 
              <div className="modal-dialog modal-dialog-centered">
                 <div className="modal-content">
                     <div className="modal-header">
                     <h4 className="modal-title">Sign Up</h4>
                    <button type="button" className="close" data-dismiss="modal" data-target="signinupPopupBox">&times;</button>                    
                  </div>
                     <div className="modal-body">
                     <form>
                       <div className="row">
                         <div className="col-md-12">
                           <div className="form-group">
                             <label for="email">Email ID:</label>
                             <input type="email" className="form-control" id="emailId" value={this.state.email} onChange={this.handleEmailChange}/>
                         </div>
                         </div>
                         <div className="col-md-12">
                           <div className="form-group">
                             <label for="email">Mobile :</label>
                             <input type="number" className="form-control" id="mobile"  value={this.state.mobile} onChange={this.handleMobileChange}/>
                           </div>
                         </div>
                         <div className="col-md-6">
                           <div className="form-group">
                             <label for="email">FirstName :</label>
                             <input type="text" className="form-control" id="firstName"  value={this.state.firstName} onChange={this.handleFirstNameChange}/>
                           </div>
                         </div>
                         <div className="col-md-6">
                           <div className="form-group">
                             <label for="email">LastName :</label>
                             <input type="text" className="form-control" id="LastName"  value={this.state.lastName} onChange={this.handleLastNameChange}/>
                           </div>
                         </div>
                         <div className="col-md-12">
                           <div className="form-group">
                             <label for="pwd">Password:</label>
                             <input type="password" className="form-control" id="pwd" value={this.state.passwd} onChange={this.handlePasswdChange}/>
                           </div> 
                         </div>                       
                         <div className="col-md-12">
                           <div className="form-group">
                             <label for="pwd">Confirm Password:</label>
                             <input type="password" className="form-control" id="pwdConfirm" value={this.state.cnfPasswd} onChange={this.handleCnfPasswdChange}/>
                           </div>
                         </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                           <div className="form-group">
                           <input type="radio" className="ck-gender-sel" value="1" name="gender" id="radioFemale" onChange={this.handleGenderChange}/>Female
                           </div> 
                         </div>
                          <div className="col-md-4">
                           <div className="form-group">
                           <input type="radio" className="ck-gender-sel" value="2" name="gender" id="radioMale" onChange={this.handleGenderChange}/>Male
                           </div> 
                         </div>
                          <div className="col-md-4">
                           <div className="form-group">
                            <input type="radio" className="ck-gender-sel" value="3" name="gender" id="radioTransgender" onChange={this.handleGenderChange}/>Transgender
                           </div>
                           </div>
                        </div>                       
                         <div className="container">
                           <div className="form-group">
                           <div className="row">
                             <div className="col-md-4">                              
                               Sign Up as
                             </div>
                             <div className="col-md-8">
                               <select name="role" value={this.state.role} 
                                 onChange={this.handleRoleChange}> 
                                 <option value="1" selected>Student</option>
                                 <option value="2">Teacher</option>
                                 <option value="3">Tutor/Parent</option>                               
                               </select>
                             </div>                         
                           </div>
                           </div>
                           <div className="row">
                             <div className="col-md-12">
                               <div className="form-group">
                               Does your child have an account on Study to Shine?
                               </div>
                             </div>
                           </div>
                           <div className="row">
                             
                             <div className="col-md-6">
                               <input type="radio" className="ck-gender-sel" value="true" name="gender" id="radioYes" onChange={this.handleIsExistUserChange}/>Yes
                              </div>
                              <div className="col-md-6">
                               <input type="radio" className="ck-gender-sel" value="false" name="gender" id="radioNo" onChange={this.handleIsExistUserChange}/>No
                              </div>
                             
                           </div>
                         </div>  
                         <div className="form-group"></div>                     
                        <div className="container">
                                                 
                             <div className="form-group">
                               <label for="pwd">Choose Username for yourward:</label>
                               <input type="text" className="form-control" id="userName" value ={this.state.username} onChange={this.handleUsernameChange}/>
                             </div>                                                   
                          
                                                 
                           <div className="form-group">
                             <label for="pwd">Set Password:</label>
                             <input type="password" className="form-control" id="pwdConfirm" value={this.state.userPasswd} onChange={this.handleUserPasswdChange}/>
                           </div>                                                   
                           <div className="form-group">
                             <label for="pwd">Choose Level:</label>
                             <select name="level" value={this.state.level} onChange={this.handleLevelChange}>
                             <option value="1" selected>Foundation</option>
                             <option value="2">Preparatory</option>
                             <option value="3">MiddleSchool</option>
                             <option value="4">Secondary</option>                               
                           </select>
                           </div>   
                        </div>
                        <div className="form-group">
                         <button type="submit" id="button-color" value="SIGN IN" className="btn" onClick={this.registerUser}>SIGN UP</button>                          
                      </div>
                     </form>
                  </div>
                  </div>
              </div>
            </div>
            </div>
        )
    }
}

export default Register;