import React from 'react';
import logo from '../../assets/S2SLogo.png';
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


const Header =  () =>(<div>
 <section>  
   <div className="container-fluid">
     <div className="row header-tile">
       <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 text-white">
         <a href="/" title="study2shine.com">
           <img src={logo} alt="study2shine" height="55px" width="55px" className="img-fluid"/>
         </a>
         <strong><i>studytoshine</i></strong><span className="text-100">TM</span>
       </div>
       <div className="col-lg-10 col-md-10 col-sm-6 col-xs-12">
         <div className="header-tile-icon">
          <a href="/">
            <i className="fa fa-search header-icon-color"></i>
          </a>
          <a href="/">
            <i className="fa fa-home header-icon-color"></i>
          </a>
          <a href="/">
            <i className="fa fa-bell header-icon-color"></i>
          </a>
          <a href="/">
            <i className="fa fa-user-circle-o fa-lg header-icon-color"></i>
          </a>
        </div>
       </div>
     </div>
   </div>
   <div className="container-fluid header">
     <div className="row">
       <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
         <h2> Administrator Dashboard </h2>
       </div>
     </div>
     <div className="row">
       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 message">
         message goes here.
       </div>
     </div>
   </div>
</section>
</div>)

export default Header;