import React  ,{ useEffect,useState }  from 'react';
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import ILearnLogo from '../../assets/I_Learn_Shadow.png';
import IEnjoyLogo from '../../assets/I_Enjoy_Shadow.png';
import IAssessLogo from '../../assets/I_Assess_Shadow.png';
import IExcelLogo from '../../assets/I_Excel_Shadow.png';
import IamAwareLogo from '../../assets/I_Am_Aware_Shadow.png';
import MyCountryLogo from '../../assets/My_Country_My_Pride_Shadow.png';
import {A} from 'hookrouter';
import API from "../../utils/api";
import $ from 'jquery';


const showMenu = (catClassName) => {
    
     // alert("Hello Show menu");
    console.log('Show menu called');
    hideMenu();
    $('div').closest(catClassName).toggleClass("show");
    console.log('Hello')
};


window.onclick = function(event) {
    if (!event.target.classList.contains('fa-ellipsis-v')) {
      hideMenu();
    }
  }

const hideMenu = () => {
    
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
};


const Dashhboardmain =() =>
{
    const [menuItem ,setmenuItem ]= useState([]);
    const [menuItem2 ,setmenuItem2 ]= useState([]);
   
    useEffect(() => {
        
        debugger;
        let userData =  API.get('/menus');
        userData.then((response) =>{
            console.log(response.data.data);
            setmenuItem(response.data.data.menus[1].menuItemText);
            setmenuItem2(response.data.data.menus[0].menuItemText);
            //setmenuItem(response.data.data);
            })
       
       // console.log('hii' + userData);
      }, [])
    console.log(menuItem);
      //let menuitemdata = menuItem; 
    return(<div>
   <div className="container-fluid content mt-5">
 <div className="row">
   <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
     Select Theme
   </div>
 </div>
 <div className="row">
  <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12 content-message">
    *Note : Select Category which need to Create, Update or Delete.
  </div>
</div>
</div>
<div className="container-fluid content">
<div className="row">
  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
    <img src={ILearnLogo} className="icons-margin" alt="I am Aware" height="190px" width="190px" />
    <div className="icon-title">
       <span className="icon-title-display">
        {menuItem}
      </span>
      <span className="icon-title-display">
       <a onclick="showMenu('.iLearn')" className="dropbtn"><i className="fa fa-ellipsis-v"></i></a>
      </span>
      <div className="dropdown-content iLearn">
        <a href = "/"> Edit Category </a>
        <a href="/"> Edit Topic </a>
      </div>
    </div>
  </div>
  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
    <img src={IEnjoyLogo} class="icons-margin" alt="I am Aware" height="190px" width="190px" />
    <div className="icon-title">
      <span className="icon-title-display">
      I Enjoy
     </span>
     <span className="icon-title-display">
      <a onclick="showMenu('.iEnjoy')" className="dropbtn"><i className="fa fa-ellipsis-v"></i></a>
     </span>
     <div className="dropdown-content iEnjoy">
      <a href = "/"> Edit Category </a>
      <a href="/"> Edit Topic </a>
    </div>
   </div>
  </div>
  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
    <img src={IAssessLogo} className="icons-margin" alt="I am Aware" height="190px" width="190px" />
    <div className="icon-title">
      <span className="icon-title-display">
       I Assess
     </span>
     <span className="icon-title-display">
      <a onclick="showMenu('.iAssess')" className="dropbtn"><i className="fa fa-ellipsis-v"></i></a>
     </span>
     <div className="dropdown-content iAssess">
      <a href = "/"> Edit Category </a>
      <a href="/"> Edit Topic </a>
    </div>
   </div>
  </div>
<div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
  <img src={IExcelLogo} class="icons-margin" alt="I am Aware" height="190px" width="190px" />
  <div className="icon-title">
    <span className="icon-title-display">
      I Excel
    </span>
    <span className="icon-title-display">
      <a onclick="showMenu('.iExcel')" className="dropbtn"><i className="fa fa-ellipsis-v"></i></a>
    </span>
    <div className="dropdown-content iExcel">
      <a href = "/"> Edit Category </a>
      <a href="/"> Edit Topic </a>
    </div>
  </div>
</div>
  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
    <img src={IamAwareLogo} className="icons-margin" alt="I am Aware" height="190px" width="190px" />
    <div className="icon-title">
      <span className="icon-title-display">
       I Am Aware
     </span>
     <span className="icon-title-display">
      <a onclick="showMenu('.iAware')" class="dropbtn"><i class="fa fa-ellipsis-v"></i></a>
    </span>
    <div className="dropdown-content iAware">
      <a href = "/"> Edit Category </a>
      <a href="/"> Edit Topic </a>
    </div>
   </div>
  </div>

  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
    <img src={MyCountryLogo} className="icons-margin" title="My Country My Pride" alt="I am Aware" height="190px" width="190px" />
    <div className="icon-title">
      <span className="icon-title-display"> 
       My Country My Pride
     </span>
     <span className="icon-title-display">
      <a onClick={showMenu.bind(null,'.myCountry')} className="dropbtn"><i className="fa fa-ellipsis-v"></i></a>
    </span>
    <div className="dropdown-content myCountry">
      <A href="/categorylist">Edit Category</A>
      <A href="/addtopic">Edit Topic</A>
    </div>
   </div>
  </div>
</div>
</div>

</div>)
};

export default Dashhboardmain;