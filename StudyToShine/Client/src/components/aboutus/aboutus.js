import React, { Component } from 'react';
import la from '../crousal/la.jpg';
import '../site.css';

export default class Aboutus extends Component {
    render()
    {
        return(
            <div>
             <div className="d-flex" id="wrapper">  
  <div id="page-content-wrapper">
  <section>
      <div className="container">
        <h1 className="text-center text-capitalize pt-5">about us</h1>
        <hr className="w-25 mx-auto pt-5" />
      </div>
      <div className="row mb-5">
        <div className="col-lg-6 col-md-6 col-sm-1">
          <img src={la} alt="test" class="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-1">
          <h1 className="text-capitalize">who are we?</h1>
          <hr />
          <p className="m-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <button className="btn btncolor">Get Started!</button>
        </div>
      </div>
    </section>
        </div>
        </div>
        </div>
        )
    }
}
