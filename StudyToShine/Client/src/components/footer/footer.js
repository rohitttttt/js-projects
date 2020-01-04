import React, { Component } from 'react';
import facebook from '../footer/fb.png';
import twitter from '../footer/twitter.png';
import instagram from '../footer/insta.png';
import '../site.css';

export default class Footer extends Component {
    render()
    {
        return(
            <div>
              <section class="header-color">
      <article className="py-5">
        <div className="text-capitalize text-center">
          <h3 className="display-4">Contribute</h3>
          <p>be a part of Study to Shine family.</p>
          <button className="btn button-color" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#myModal">Join now</button>
        </div>

        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
  
            
              <div className="modal-header header-color">
                <h4 className="modal-title">Signup</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
  
              <div className="modal-body">
                  <form action="/action_page.php">
                    <div className="form-group">
                      <label for="email">Email address:</label>
                      <input type="email" className="form-control" id="email" autocomplete="off" />
                    </div>
                    <div className="form-group">
                      <label for="pwd">Password:</label>
                      <input type="password" className="form-control" id="pwd"/>
                    </div>
                    <div className="form-group form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox"/> Remember me
                      </label>
                    </div>
                    <button type="submit" class="btn button-color">Register</button>
                  </form>
              </div>
  
              <div class="modal-footer header-color">
                <button type="button" class="btn btn-secondary button-color" data-dismiss="modal">Close</button>
              </div>
  
            </div>
          </div>
        </div>
      </article>
    </section>
               <footer>
      <div id="copyright" className="header-color">
        <div className="row pt-5">
          <div className="col-lg-3 col-md-2 col-sm-12">                  
                  <ul class="ul-footer">
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
              
              <div class="col-lg-3 col-md-3 col-sm-12 col-12 link-align-right">
                <a href="https://www.facebook.com/gauravg07" aria-label="Follow us on Facebook">
                <img src={facebook} alt="facebook" height="30px" width="30px" className="img-fluid" />
                </a>
                <a href="https://twitter.com/gauravg07" aria-label="Follow us on Twitter">
                  <img src={twitter} alt="twitter" height="30px" width="30px" class="img-fluid" />
                </a>
                <a href="https://instagram.com/gauravg07" aria-label="Follow us on Instagram">
                  <img src={instagram} alt="instagram" height="30px" width="30px" class="img-fluid" /    >
                </a>
              </div>
          </div>      
      </div>
      
  </footer>
            </div>
        )
    }
}
