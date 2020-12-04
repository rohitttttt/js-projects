import React from "react";
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const AddCategory = () => {

    return (
        <section>
<div class="container-fluid content mt-4">
<div class="row">
   <div class="col-lg-12 col-md-6 col-sm-6 col-xs-12">
     Choose Theme and Level to Create or Modify Category
   </div>
 </div>
 <div class="row content-message">
  <div class="col-lg-12 col-md-12 col-sm-6 col-xs-12">
    *Note : Message.
  </div>
</div>
<div class="row item-margin pt-2">
    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 mt-1">
        Choose Theme:
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <select disabled>
            <option value="I Learn">I Learn</option>
            <option value="I Assess">I Assess</option>
        </select>
    </div>
</div>
<div class="row item-margin pt-2">
    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12 mt-1">
        Choose Level:
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <select>
            <option value="Foundation">Foundation</option>
            <option value="Item 2">Item 2</option>
        </select>
    </div>
</div>
<div class="row form-group item-margin pt-2">
    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
      Category Name:
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <input type="text" name="category" class="form-control text-category pl-4" placeholder="Enter a new category.."/>
    </div>
</div>
<div class="row form-group item-margin pt-2">
    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
      Category Description:
    </div>
    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
    <textarea name="mustRead" className="form-control multiline-text full-width pl-4" placeholder="Type here.."> </textarea>
    </div>
</div>
<div class="row form-group item-margin pt-2">
    <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
      Select Image:
    </div>
    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
    <input type="file" />
    </div>
</div>
<div class="row form-group item-margin ml-1 pt-3">
  <input type="button" class="button" value="Save" />
</div>

</div>
</section>);};
                                      
export default AddCategory;
