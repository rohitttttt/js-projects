import React, { useEffect,useState } from "react";
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import {A} from 'hookrouter';
import Loader from 'react-loader';
import API from "../../utils/api";
import $ from 'jquery';



const showMenu = (catClassName) => {
    
    // alert("Hello Show menu");
   console.log('Show menu called' + catClassName);
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

const CategoryList = () => {
  
  const [categoryList ,setcategoryList ]= useState([]);
  const [showEditCategoryList ,seteditCategoryList ]= useState(['false']);
  const [currentIndex , setCurrentIndex] = useState(-1);
  const [deleteselectedCategory , setselecteddeleteCategory] = useState([]);
  const [isLoader , setisLoader] = useState(true);


  const onFileChange = (event) => { 
     
    // Update the state 
    //this.setState({ selectedFile: event.target.files[0] }); 
   
   
  };
  const onhandleDelete = () => {
    setisLoader(false);
    const selectedData = deleteselectedCategory;
  
    if (selectedData.isActive === true) {
      selectedData.isActive = false;
    }
    console.log(JSON.stringify(selectedData));
    
    //alert('delete' + JSON.stringify(selectedData));

    API.post('/categories/update',selectedData,{
      headers : {
        'content-type': 'application/json'
      }
    })
      .then(res =>  {
        setisLoader(true);
        alert('Record updated Successfully');
        console.log(res)
      
      })
      .catch(err => {
        setisLoader(true);
        console.log(err);
      });

  }
  const deleteCategory =(h ,index) => {
    
    setselecteddeleteCategory(h);

  }
  const showEditCategory  = (index) => {

    //seteditCategoryList(isFlag);
    setCurrentIndex(index);
    //seteditCategoryList(isFlag);
  
  };
  
  
  useEffect(() => {
        
    let categoryListData =  API.get('/categories');
    categoryListData.then((response) =>{
        console.log(response.data.data.categories);
        setcategoryList(response.data.data.categories);
        })
        console.log(JSON.stringify(categoryListData));
   // console.log('hii' + userData);
  }, [])

 let list;
 let themeDropdown;

 console.log('show' + showEditCategoryList);
 if(categoryList && showEditCategoryList == 'false')
 {
  list = categoryList.map((h ,index ) => { return (
      
    <div className="row item-margin">
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
    {currentIndex == index ? <div>
        <input type="file"onChange={() => onFileChange('true')}  /> 
        </div> : <div className="category-image">
       <img className="category-image" src={`data:image/jpeg;base64,${h.categoryImageBase64}`} />
       </div>}
       
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"> 
        {currentIndex == index ? <strong><input 
          type="text" 
          style={{width : '280px'}}
          value={h.category}
         /></strong> : <strong>{h.category}</strong>}
        <p className="text-justify">
        {currentIndex == index ? <p className="text-justify">
         <textarea id="w3review" value = {h.description}  rows="4" cols="70"></textarea>
         </p> : <strong>{h.description}</strong>}
        </p>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-1 text-center">
        <span className="icon-title-display">
            <a onClick={showMenu.bind(null, '.i' + index)} className="dropbtn"><i className="fa fa-ellipsis-v"> </i></a>
        </span>
        <div className= {'dropdown-content i' + index}>
        {currentIndex == index ? <div><A onClick={() => showEditCategory('true',index)} href="/editcategory"><i className="fa fa-pencil"></i>Save</A>
           <A href="" onClick={() => showEditCategory(-1)} data-toggle="modal" data-backdrop="static" data-keyboard="false"><i className="fa fa-trash"></i>Cancel</A></div> : <div><A onClick={() => showEditCategory(index)} href=""><i className="fa fa-pencil"></i>Modify</A>
            <A id = "modalpopup" onClick={() => deleteCategory(h,index)} href="#confimPopupBox" data-toggle="modal" data-backdrop="static" data-keyboard="false"><i className="fa fa-trash"></i>Delete</A> </div>}
            
        </div>        
    </div>
</div>)
  })

  themeDropdown  = <div><div className="row item-margin">
   <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 mt-1">
       Choose Theme:
   </div>
   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
       {currentIndex == -1 ? <select>
           <option>I Learn</option>
           <option>I Assess</option>
       </select> : <select disabled>
           <option>I Learn</option>
           <option>I Assess</option>
       </select>}
   </div>
</div>
<div className="row item-margin">
   <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 mt-1">
       Choose Level:
   </div>
   <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
   {currentIndex == -1 ? <select>
           <option className="select-list">Foundation</option>
           <option className="select-list">Item 2</option>
       </select> : <select disabled>
           <option className="select-list">Foundation</option>
           <option className="select-list">Item 2</option>
       </select>}
   </div>
</div>
</div>

 }
 
  return (
    <div>
        <section>
        <Loader loaded={isLoader} style={{position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '',
  background: 'none repeat scroll 0 0 black',
  opacity:'0.5',
  zIndex: '9999',
  }}></Loader>
<div className="container-fluid content mt-4">
<div className="row">
   <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
     Select to Modify and Delete
   </div>
 </div>
 <div className="row content-message">
  <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
    *Note : Never delete anything permanently, things moved to trash can be restored.
  </div>
</div>
{themeDropdown}
<div className="row item-margin">
    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 addCategoryLink">
    <A href="/addcategory">+ Add Category</A>  
    </div>
</div>
<div className="row item-margin">
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        Select Category
    </div>
</div>
{list}
</div>
</section>
<section>
      <div className="modal fade" id="confimPopupBox"> 
        <div className="modal-dialog modal-dialog-centered">
           <div className="modal-content">
              
              <div className="modal-body text-center mt-5">
                <i className="fa fa-exclamation-circle fa-5x"></i>
                <div className="form-group">
                  <h4>Are you Sure?</h4>
                </div>
                <div className="form-group">
                  *Place your success message here.*
                </div>
                <div className="form-group mt-5">
                  <input type="button" className="button modal-button-yes-color" value="Yes" data-dismiss="modal" onClick={() => onhandleDelete()}/>
                  <input type="button" className="button modal-button-no-color" data-dismiss="modal" value="No" />
                </div>
              </div>
           </div>
        </div>
      </div>
</section>
    </div>
  );
};

export default CategoryList;
