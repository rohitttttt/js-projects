import React, { Component } from 'react';
import '../site.css';
import API from "../../utils/api";

export default class HomeVideo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videourl: null
    };
  }
  async componentDidMount() {
    // Load async data.
    let userData = await API.get('/videos');
    if(userData.data.message === "success")
    {
      debugger;
      this.setState({videourl : userData.data.data});
      //console.log(this.state.videourl);
    }
  }
    render()
    {
      let url1 , url2, url3;
      if(this.state.videourl.videos)
      {
       url1 = this.state.videourl.videos[0].url;
       url2 = this.state.videourl.videos[1].url;
       url3 = this.state.videourl.videos[2].url;
      }
      
      if(url1 && url2 && url3)
      {
        url1 = <video src={url1} type="video/mp4" controls height="150" width="418">
        Your browser doesn't support videos!
       </video>;
       url2 = <video src={url2} type="video/mp4" controls height="150" width="418">
       Your browser doesn't support videos!
      </video>;
      url3 = <video src={url3} type="video/mp4" controls height="150" width="418">
      Your browser doesn't support videos!
     </video>;
      } 
        return(
            <div>
             <section>
      <div className="container-fluid">
        <h1 className="text-center text-capitalize pt-5">See Videos</h1>
        <hr className="w-25 mx-auto pt-5" />
        <div className="row text-center mb-5">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card box-shadow-custom">
                {url1}
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card box-shadow-custom">              
             {url2}
              <div className="card-body">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card box-shadow-custom">
                {url3}
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
