import React from 'react';
import '../site.css';
import API from "../../utils/api";

class Register extends React.Component {
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
                             <input type="email" className="form-control" id="emailId" autocomplete="off"/>
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
                         <button type="submit" value="SIGN IN" className="btn button-color">SIGN UP</button>                          
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