import React, { Component } from 'react';
import logo from '../header/logo3.png';
import '../site.css';




export default class Header extends Component {
    render()
    {
        return(
            <div>
        <div className="container-fluid">
          <div className="row" id="header-bar">
             <div className="col-9">

             </div>
             <div className="col">
                <a className="header-bar" href="/" title="study2shine.com"> Student</a>
              </div>
              <div className="col">
                  <a className="header-bar" href="/" title="study2shine.com"> Teacher/Tutor</a>
              </div>               
                <div className="col">
                <a className="header-bar" href="/" title="study2shine.com"> Parent</a>
             </div>
          </div>
  </div>
    <div className="container-fluid header-color">
      <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12">
          <a href="/" title="study2shine.com">
            <img src={logo} alt="study2shine" height="120px" width="120px" className="img-fluid" />            
          </a>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-12">
          <h1 className="logo-heading">
            Study to Shine             
          </h1>
          <span className="logo-quote-align">-Take charge of your learning</span>
        </div>
        <div className="col-lg-3 col-md-1 col-sm-12">           
            <div className="row no-gutters header-search">
              <div className="col">
                  <input className="form-control box-shadow-custom" type="search" placeholder="Search..." aria-label="Search"/>
              </div>
              <div className="col-auto">
                  <button className="btn box-shadow-custom" id ="button-color" type="button">
                      <i className="fa fa-search"></i>
                  </button>
              </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-1 col-sm-12 header-button">
          <button className="btn mr-2" id ="button-color"type="submit">Login | Register</button>         
        </div>
       
      </div>
    </div>
</div>
        )
    }
}
