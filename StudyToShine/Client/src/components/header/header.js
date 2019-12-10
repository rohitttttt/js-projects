import React, { Component } from 'react';
import headerstyle from  '../header/header.css';
import logo from '../header/logo3.png';


export default class Header extends Component {
    render()
    {
        return(
            <div>
        <div className="container-fluid">
          <div class="row" id="header-bar">
             <div class="col-9">

             </div>
             <div class="col">
                <a className={headerstyle.headerbar} href="/" title="study2shine.com"> Student</a>
              </div>
              <div class="col">
                  <a className={headerstyle.headerbar} href="/" title="study2shine.com"> Teacher/Tutor</a>
              </div>               
                <div class="col">
                <a className={headerstyle.headerbar} href="/" title="study2shine.com"> Parent</a>
             </div>
          </div>
  </div>
    <div class="container-fluid header-color">
      <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-12">
          <a href="/" title="study2shine.com">
            <img src={logo} alt="study2shine" height="120px" width="120px" class="img-fluid" />            
          </a>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12">
          <h1 class="logo-heading">
            Study to Shine             
          </h1>
          <span class="logo-quote-align">-Take charge of your learning</span>
        </div>
        <div class="col-lg-3 col-md-1 col-sm-12">           
            <div class="row no-gutters header-search">
              <div class="col">
                  <input class="form-control box-shadow-custom" type="search" placeholder="Search..." aria-label="Search"/>
              </div>
              <div class="col-auto">
                  <button className={headerstyle.buttoncolor + ' ' + headerstyle.boxshadowcustom} type="button">
                      <i class="fa fa-search"></i>
                  </button>
              </div>
          </div>
        </div>
        <div className={headerstyle.headerbutton}>
          <button className={headerstyle.buttoncolor} type="submit">Login | Register</button>         
        </div>
      </div>
    </div>
</div>
        )
    }
}
