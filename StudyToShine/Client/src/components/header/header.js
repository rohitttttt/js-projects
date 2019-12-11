import React, { Component } from 'react';
import logo from '../header/logo3.png';
import {Button} from 'react-bootstrap';
import '../site.css';




export default class Header extends Component {
    render()
    {
        return(
            <div>
        <div className="container-fluid">
          <div class="row" id="headerbar">
             <div class="col-9">

             </div>
             <div className="col">
                <a className="headerbar" href="/" title="study2shine.com"> Student</a>
              </div>
              <div className="col">
                  <a className="headerbar" href="/" title="study2shine.com"> Teacher/Tutor</a>
              </div>               
                <div className="col">
                <a className="headerbar" href="/" title="study2shine.com"> Parent</a>
             </div>
          </div>
  </div>
    <div className="container-fluid headercolor">
      <div class="row">
          <div className="col-lg-2 col-md-2 col-sm-12">
          <a href="/" title="study2shine.com">
            <img src={logo} alt="study2shine" height="120px" width="120px" class="img-fluid" />            
          </a>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12">
          <h1 class="logo-heading">
            Study to Shine             
          </h1>
          <span className="logoquotealign">-Take charge of your learning</span>
        </div>
        <div class="col-lg-3 col-md-1 col-sm-12">           
            <div class="row no-gutters header-search">
              <div class="col">
                  <input className="form-control boxshadowcustom" type="search" placeholder="Search..." aria-label="Search"/>
              </div>
              <div class="col-auto">
                  <Button className="btn buttoncolor boxshadowcustom">
                      <i className="fa fa-search"></i>
                  </Button>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-1 col-sm-12 headerbutton">
          <Button className="btn buttoncolor mr-2" type="submit">Login | Register</Button>         
        </div>
       
      </div>
    </div>
</div>
        )
    }
}
