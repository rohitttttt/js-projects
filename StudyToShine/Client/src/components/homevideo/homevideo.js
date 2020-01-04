import React, { Component } from 'react';
import '../site.css';

export default class HomeVideo extends Component {
    render()
    {
        return(
            <div>
             <section>
      <div className="container-fluid">
        <h1 className="text-center text-capitalize pt-5">See Videos</h1>
        <hr className="w-25 mx-auto pt-5" />
        <div className="row text-center mb-5">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card box-shadow-custom">
                <video src="https://res.cloudinary.com/demo/video/upload/dog.mp4" type="video/mp4" controls height="150" width="418">
                  Your browser doesn't support videos!
                 </video>
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card box-shadow-custom">              
              <video src="https://res.cloudinary.com/demo/video/upload/dog.mp4" type="video/mp4" controls height="150" width="418">
               Your browser doesn't support videos!
              </video>
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card box-shadow-custom">
                <video src="https://res.cloudinary.com/demo/video/upload/dog.mp4" type="video/mp4" controls height="150" width="418">
                  Your browser doesn't support videos!
                 </video>
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>                
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
        </div>
        )
    }
}
