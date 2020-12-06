import React, {state,Component} from "react";
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import API from "../../utils/api";
import { data } from "jquery";

class AddCategory extends Component {
   constructor(props){
     super(props);
    this.state = {
      categoryName : "",
      desc : "",
      level: "Foundation",
      theme: "I Learn",
      file:"",
    };
    this.onLevelChange=this.onLevelChange.bind(this);
   };
    
   onThemeChange= e => {
    this.setState({
      theme: e.target.value
    });
   };
   
   onLevelChange = e => {
      this.setState({
        level : e.target.value
      });
    };

   onCategoryNameChange = e => {
      this.setState({
        categoryName : e.target.value
      });
    };

   onCategoryDescriptionChange = e => {
      this.setState({
        desc : e.target.value
      });
    };

   onFileChange = e => {
      this.setState({
        file: e.target.files[0]
      });
    };

   handleSubmit = e => {
    e.preventDefault();

    const data = new FormData();
      data.append('theme',this.state.theme);
      data.append('level',this.state.level);
      data.append('category',this.state.categoryName);
      data.append('description',this.state.desc);
      data.append('uploads',this.state.file);
      data.append('categoryImage',null);
      data.append('isApproved',false);
      data.append('isActive',true);
      data.append('created_by','gaurav');


    console.log(data);

    API.post('/categories/create',data,{
      headers : {
        'content-type': 'multipart/form-data'
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
   };

   
   render() {
    return (  
        <section>
<div className="container-fluid content mt-4">
<form onSubmit={this.handleSubmit}>
<div className="row">
   <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
     Choose Theme and Level to Create or Modify Category
   </div>
 </div>
 <div className="row content-message">
  <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
    *Note : Message.
  </div>
</div>
<div className="row item-margin pt-2">
    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 mt-1">
        Choose Theme:
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <select disabled value={this.state.theme} onChange={this.onThemeChange}>
            <option value="I Learn">I Learn</option>
            <option value="I Assess">I Assess</option>
        </select>
    </div>
</div>
<div className="row item-margin pt-2">
    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 mt-1">
        Choose Level:
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <select value={this.state.level} onChange={this.onLevelChange}>
            <option value="Foundation">Foundation</option>
            <option value="Item 2">Item 2</option>
        </select>
    </div>
</div>
<div className="row form-group item-margin pt-2">
    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
      Category Name:
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <input type="text" onChange={this.onCategoryNameChange} value={this.state.categoryName} name="category" className="form-control text-category pl-4" placeholder="Enter a new category.."/>
    </div>
</div>
<div className="row form-group item-margin pt-2">
    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
      Category Description:
    </div>
    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
    <textarea name="mustRead" onChange={this.onCategoryDescriptionChange} value={this.state.desc} className="form-control multiline-text full-width pl-4" placeholder="Type here.."> </textarea>
    </div>
</div>
<div className="row form-group item-margin pt-2">
    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
      Select Image:
    </div>
    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
    <input type="file" onChange={this.onFileChange}/>
    </div>
</div>
<div className="row form-group item-margin ml-1 pt-3">
  <input type="submit" className="button" value="Save" />
</div>
</form>
</div>
</section>
);

}
}                                    
export default AddCategory;

