import React, { Component } from 'react';
import facebook from '../footer/fb.png';
import twitter from '../footer/twitter.png';
import instagram from '../footer/insta.png';
import Login from '../login/login';
import '../site.css';

export default class Footer extends Component {
    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
        }  
        togglePopup() {  
            this.setState({  
                 showPopup: !this.state.showPopup  
            });  
             }  
    render()
    {
        return(
            <div>
              <section className="header-color">
      <article className="py-5">
        <div className="text-capitalize text-center">
          <h3 className="display-4">Contribute</h3>
          <p>be a part of Study to Shine family.</p>
          <button className="btn" id ="button-color" data-backdrop="static"  onClick={this.togglePopup.bind(this)}>Join now</button>
          {this.state.showPopup ?  
<Login  
          text=''  
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  
        </div>

      </article>
    </section>
               <footer>
      <div id="copyright" className="header-color">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-2 col-sm-12">                  
                  <ul className="ul-footer">
                    <li>Home</li>
                    <li>About</li>
                    <li>ContactUs</li>
                    <li>Blog</li>
                  </ul>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-12">                  
                  <ul className="ul-footer">
                      <li>I Learn</li>
                      <li>I Enjoy</li>
                      <li>I am Aware</li>
                      <li>I Excel</li>                          
                    </ul>                  
          </div>
          <div className="col-lg-3 col-md-2 col-sm-12">                  
                  <ul className="ul-footer">
                      <li>I Access</li>
                      <li>My Country My Pride</li> 
                      <li>Testimonials</li>
                      <li>Donate</li>                        
                    </ul>                  
          </div>
          <div className="col-lg-3 col-md-2 col-sm-12">                  
                  <ul className="ul-footer">
                    <li>Projects</li>
                    <li>Services</li>
                    <li>Parents</li>
                    <li>Teachers</li>
                  </ul>                  
          </div>
        </div>                    
            <div className="row footer-tile footer-bar"> 
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <a className="footer-tile" href="/">Terms of use</a> | <a className="footer-tile" href="/">Privacy Policy</a>
                 </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12"> &copy; Study to Shine | A Venture of ABHYAST Private Limited </div>
              
              <div className="col-lg-3 col-md-3 col-sm-12 col-12 link-align-right">
                <a href="https://www.facebook.com/gauravg07" aria-label="Follow us on Facebook">
                <img src={facebook} alt="facebook" height="30px" width="30px" className="img-fluid" />
                </a>
                <a href="https://twitter.com/gauravg07" aria-label="Follow us on Twitter">
                  <img src={twitter} alt="twitter" height="30px" width="30px" className="img-fluid" />
                </a>
                <a href="https://instagram.com/gauravg07" aria-label="Follow us on Instagram">
                  <img src={instagram} alt="instagram" height="30px" width="30px" className="img-fluid" /    >
                </a>
              </div>
          </div>      
      </div>
      
  </footer>
            </div>
        )
    }
}
