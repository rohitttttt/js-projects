import React from "react";
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const RemoveTopic = () => {

    return (
        <section>
<div className="container-fluid content mt-4">
  <div className="row">
    <div className="col-lg-12 col-md-6 col-sm-6 col-xs-12">
     <strong>What do you want to do?</strong>
    </div>
  </div>
  <div className="row content-message mt-2">
   <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-1">
     <input type="button" value="Add Topic" />
   </div>
   <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-2">
     <input type="button" value="Edit Topic" />
   </div>
   <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-3">
     <input type="button" value="Remove Topic" />
   </div>
 </div>
<div className="row item-margin mt-2">
    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 mt-1">
        Choose Theme:
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <select>
            <option>I Learn</option>
            <option>I Assess</option>
        </select>
    </div>
</div>
<div className="row item-margin mt-3">
    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 mt-1">
        Choose Level:
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <select>
            <option className="select-list">Foundation</option>
            <option className="select-list">Item 2</option>
        </select>
    </div>
</div>
<div className="row form-group item-margin mt-3">
  <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
    Choose Category:
  </div>
  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
    <select>
      <option value="Foundation">Health and Hygiene</option>
      <option value="Item 2">Item 2</option>
  </select>
  </div>
</div>
<div className="row item-margin mt-5">
    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
      <strong>*NOTE : Never delete anything permanently, things moved to trash can be restored.</strong>
    </div>
</div>
<div className="row item-margin mt-3">
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
       <div className="category-image">
       </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <strong>Health and Hygiene</strong>
        <div className="text-justify">
            By Aditi Anuj
        </div>
        <div className="text-justify">
          <i>Health and Hygiene, Health, Hygiene</i>
        </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-1 text-center">
        <span className="icon-title-display">
            <a onclick="showMenu('.i1')" className="dropbtn"><i className="fa fa-ellipsis-v"></i></a>
        </span>
        <div className="dropdown-content i1">
            <a href="#confirmModal" data-toggle="modal" data-backdrop="static" data-keyboard="false" ><i className="fa fa-thumb-tack"></i> Unpublish</a>
            <a href="#confirmModal" data-toggle="modal" data-backdrop="static" data-keyboard="false"><i className="fa fa-trash"></i> Move to Trash </a>
            <a href="#deleteModal" data-toggle="modal" data-backdrop="static" data-keyboard="false"><i className="fa fa-times-circle"></i> Delete Permanently </a>
        </div>        
    </div>
</div>
<div className="row item-margin">
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
       <div className="category-image">
       </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <strong>Prevention from Covid-19</strong>
        <div className="text-justify">
          By Manish Iyer
      </div>
      <div className="text-justify">
        <i>,COVID-19, Health and Hygiene, Health, Hygiene</i>
      </div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mt-1 text-center">
        <span className="icon-title-display">
            <a onclick="showMenu('.i2')" className="dropbtn"><i className="fa fa-ellipsis-v"></i></a>
        </span>
        <div className="dropdown-content i2">
          <a href="#confirmModal" data-toggle="modal" data-backdrop="static" data-keyboard="false"><i className="fa fa-thumb-tack"></i> Unpublish</a>
          <a href="#confirmModal" data-toggle="modal" data-backdrop="static" data-keyboard="false"><i className="fa fa-trash"></i> Move to Trash </a>
          <a href="#deleteModal" data-toggle="modal" data-backdrop="static" data-keyboard="false"><i className="fa fa-times-circle"></i> Delete Permanently </a>
        </div>        
    </div>
</div>
<div className="row col form-group item-margin mt-5">
  <div className="col-lg-1 col-md-2 col-sm-6 col-xs-6">
    <input type="button" className="button" value="Save" />
  </div>
  <div className="col-lg-1 col-md-2 col-sm-6 col-xs-6 ml-3">
    <input type="button" className="button pt-1" value="Cancel" />
  </div>
</div>
</div>
</section>
);};
                                      
export default RemoveTopic;
