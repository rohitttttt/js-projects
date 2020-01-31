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
            signupRole:this.state.signupRole,
            existingUser:this.state.isExistUser,
            parentUsername:this.state.username,
            parentPassword:this.state.userPasswd,
            level:this.state.level
        };

        let userRegistered;
        try
        {
            userRegistered = await API.post('/user/register', data);
        }
        catch(ex)
        {
            return alert('user registration failed!');
        }
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
        this.setState({email:event.target.email});
    }
    handleMobileChange(event){
        this.setState({mobile:event.target.mobile});
    }
    handleFirstNameChange(event){
        this.setState({firstName:event.target.firstName});
    }
    handleLastNameChange(event){
        this.setState({lastName:event.target.lastName});
    }
    handlePasswdChange(event){
        this.setState({passwd:event.target.passwd});
    }
    handleCnfPasswdChange(event){
        this.setState({cnfPasswd:event.target.cnfPasswd});
    }
    handleGenderChange(event){
        this.setState({gender:event.target.gender});
    }
    handleSignupasChange(event){
        this.setState({signupas:event.target.signupas});
    }
    handleIsExistUserChange(event){
        this.setState({isExistUser:event.target.isExistUser});
    }
    handleUsernameChange(event){
        this.setState({username:event.target.username});
    }
    handleUserPasswdChange(event){
        this.setState({userPasswd:event.target.userPasswd});
    }
    handleLevelChange(event){
        this.setState({level:event.target.level});
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
                             <input type="email" className="form-control" id="emailId" autocomplete="off"/>
                         </div>
                         </div>
                         <div className="col-md-12">
                           <div className="form-group">
                             <label for="email">Mobile :</label>
                             <input type="number" className="form-control" id="mobile" autocomplete="off"/>
                           </div>
                         </div>
                         <div className="col-md-6">
                           <div className="form-group">
                             <label for="email">FirstName :</label>
                             <input type="text" className="form-control" id="firstName" autocomplete="off"/>
                           </div>
                         </div>
                         <div className="col-md-6">
                           <div className="form-group">
                             <label for="email">LastName :</label>
                             <input type="text" className="form-control" id="LastName" autocomplete="off"/>
                           </div>
                         </div>
                         <div className="col-md-12">
                           <div className="form-group">
                             <label for="pwd">Password:</label>
                             <input type="password" className="form-control" id="pwd"/>
                           </div> 
                         </div>                       
                         <div className="col-md-12">
                           <div className="form-group">
                             <label for="pwd">Confirm Password:</label>
                             <input type="password" className="form-control" id="pwdConfirm"/>
                           </div>
                         </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                           <div className="form-group">
                           <input type="radio" className="ck-gender-sel" value="1" name="gender" id="radioFemale"/>Female
                           </div> 
                         </div>
                          <div className="col-md-4">
                           <div className="form-group">
                           <input type="radio" className="ck-gender-sel" value="2" name="gender" id="radioMale"/>Male
                           </div> 
                         </div>
                          <div className="col-md-4">
                           <div className="form-group">
                            <input type="radio" className="ck-gender-sel" value="3" name="gender" id="radioTransgender"/>Transgender
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
                               <select name="role">
                                 <option value="Student" selected>Student</option>
                                 <option value="Teacher">Teacher</option>
                                 <option value="Tutor">Tutor/Parent</option>                               
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
                               <input type="radio" className="ck-gender-sel" value="3" name="gender" id="radioYes"/>Yes
                              </div>
                              <div className="col-md-6">
                               <input type="radio" className="ck-gender-sel" value="3" name="gender" id="radioNo"/>No
                              </div>
                             
                           </div>
                         </div>  
                         <div className="form-group"></div>                     
                        <div className="container">
                                                 
                             <div className="form-group">
                               <label for="pwd">Choose Username for yourward:</label>
                               <input type="text" className="form-control" id="pwdConfirm"/>
                             </div>                                                   
                          
                                                 
                           <div className="form-group">
                             <label for="pwd">Set Password:</label>
                             <input type="password" className="form-control" id="pwdConfirm"/>
                           </div>                                                   
                           <div className="form-group">
                             <label for="pwd">Choose Level:</label>
                             <select name="level">
                             <option value="Foundation" selected>Foundation</option>
                             <option value="Preparatory">Preparatory</option>
                             <option value="MiddleSchool">MiddleSchool</option>
                             <option value="Secondary">Secondary</option>                               
                           </select>
                           </div>   
                        </div>
                        <div className="form-group">
                         <button type="submit" id="button-color" value="SIGN IN" className="btn">SIGN UP</button>                          
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