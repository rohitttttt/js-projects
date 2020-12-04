import React from "react";
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const AddTopic = () => {

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
<div className="row item-margin pt-2">
    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 mt-1">
        Choose Theme:
    </div>
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <select disabled>
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
        <select>
            <option value="Foundation">Foundation</option>
            <option value="Item 2">Item 2</option>
        </select>
    </div>
</div>
<div className="row form-group item-margin pt-2">
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
<div className="row item-margin mt-3">
  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-1">
    Enter Topic Details :
  </div>
  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-2">
    <input type="text" name="title" className="form-control input-border pl-4" placeholder="Topic Title"/>
  </div>
  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-3">
    <input type="text" name="by" className="form-control input-border pl-4" placeholder="By ( Name )"/>
  </div>
  <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 order-4">
    <input type="text" name="keywords" className="form-control input-border full-width pl-4" placeholder="Keywords"/>
  </div>
</div>
<div className="row item-margin mt-3">
  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-1">
    Introductory Text :
  </div>
  <div className="col-lg-7 col-md-4 col-sm-6 col-xs-12 order-2">
    <textarea name="IntroPara" className="form-control multiline-text full-width pl-4 editor" placeholder="Type here.."> </textarea>
  </div>
</div>
<div className="row item-margin mt-3">
  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-1">
    Discussion Text :
  </div>
  <div className="col-lg-7 col-md-8 col-sm-6 col-xs-12 order-2">
    <textarea name="DiscPara" className="form-control multiline-text full-width pl-4 editor" placeholder="Type here.."> </textarea>
  </div>
</div>
<div className="row">
  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-1">
  </div>
  <div className="col-lg-6 col-md-8 col-sm-6 col-xs-12 addCategoryLink order-2">
    + Add More Discussion Paragraph (Add Text Area)
  </div>
</div>
<div className="row item-margin mt-3">
  <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-1">
    Conclusion Text :
  </div>
  <div className="col-lg-7 col-md-8 col-sm-6 col-xs-12 order-2">
    <textarea name="ConcPara" className="form-control multiline-text full-width pl-4 editor" placeholder="Type here.."> </textarea>
  </div>
</div>
<div className="row item-margin mt-3">
 <div className="col-lg-2 md-4 col-sm-6 col-xs-12 order-1">
   Video Link/ Embed Code :
 </div>
 <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 order-2">
  <input type="text" name="VideoLink" className="form-control input-border full-width pl-4" placeholder="Copy link or type URL"/>
 </div>
 <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12 order-3">
   <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order 1 text-right pt-2">
      Image Link :
    </div>
    <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12 order-2">
     <input type="text" name="ImageLink" className="form-control input-border full-width" placeholder="Copy link or Add"/>
    </div>
   </div>
 </div>
</div>
 <div className="row item-margin mt-3">
   <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
      Must Read :
   </div>
   <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
    <textarea name="mustRead" className="form-control multiline-text full-width pl-4" placeholder="Type here.."> </textarea>
   </div>
 </div>
 <div className="row item-margin mt-3">
  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
     References :
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
   <textarea name="references" className="form-control multiline-text full-width pl-4" placeholder="Mention References"> </textarea>
  </div>
</div>
<div className="row item-margin mt-3">
  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
    Add Quiz :
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
    <input type="button" className="button" value="Yes" />
    <input type="button" className="button ml-2" value="No" />
  </div>
</div>
<div className="row item-margin mt-3">
  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
    <h3>Quiz</h3>
  </div>
</div>
<div className="row item-margin mt-3">
  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
    Enter Question 1 :
  </div>
  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
    <input type="text" name="ques1" className="form-control input-border full-width" placeholder="Type here.."/>
   </div>
</div>
<div className="row item-margin mt-3">
  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
    Option 1 :
  </div>
  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 order-2">
    <input type="text" name="ansCh1" className="form-control input-border full-width" placeholder="Answer Choice"/>
   </div>
</div>
<div className="row item-margin mt-3">
  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
    Option 2 :
  </div>
  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 order-2">
    <input type="text" name="ansCh2" className="form-control input-border full-width" placeholder="Answer Choice"/>
   </div>
   <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 addCategoryLink order-3">
     + Add Another Options
   </div>
</div>
<div className="row item-margin mt-3">
  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
    Correct Answer :
  </div>
  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 order-2">
    <input type="text" name="ans1" className="form-control input-border full-width" placeholder="Right Answer"/>
   </div>
</div>
<div className="row item-margin mt-3">
  <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 addCategoryLink">
    + Add Another Question
  </div>
</div>
<div className="row col form-group item-margin mt-3">
  <div className="col-lg-1 col-md-2 col-sm-6 col-xs-6">
    <input type="button" className="button" value="Upload" />
  </div>
  <div className="col-lg-1 col-md-2 col-sm-6 col-xs-6 ml-3">
    <input type="button" className="button pt-1" value="Cancel" />
  </div>
</div>
</div>
</section>);};
                                      
export default AddTopic;
