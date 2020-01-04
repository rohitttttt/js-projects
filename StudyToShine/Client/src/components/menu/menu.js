import React, { Component } from 'react';
import '../site.css';

export default class Menu extends Component {
    render()
    {
        return(
            <div>
                 <nav className="navbar navbar-expand-lg navbar-light border-bottom header-color mt-2 mb-2 shadow-sm p-1" id="menu">      
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mt-lg-0 ml-auto">
        <li className="nav-item active">
          <a className="nav-link " href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="/">I Learn</a>  
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="/">I Enjoy</a>  
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">I Assess</a>    
          </li>
        <li className="nav-item active">
          <a className="nav-link" href="/">I am Aware</a>
        </li>
        <li className="nav-item active">
            <a className="nav-link" href="/">I Excel</a>  
          </li>          
            <li className="nav-item active">
                <a className="nav-link" href="/">My County My Pride</a>      
              </li>
      </ul>
    </div>
  </nav> 
        </div>
        )
    }
}
