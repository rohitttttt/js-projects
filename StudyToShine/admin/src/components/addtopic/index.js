import React from "react";
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import AddQuestion from '../addquestions/index';
import API from "../../utils/api";
import '../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';
//import Loader from 'react-loader-spinner';
import Loader from 'react-loader';
import Axios from "axios";


class AddTopic extends React.Component {
   constructor(props)
   {
     super(props);
     this.state = {
      
      selectLevelValue : '',
      selectCategoryValue:'',
      selectThemeValue:'',
      selectTitleValue:'',
      selectNameValue:'',
      selectKeywordValue:'',
      selectIntroductoryValue:'',
      selectDiscussionValue:'',
      selectConclusionValue:'',
      selectVideoLinkValue:'',
      selectImageLinkValue:'',
      selectMustReadValue:'',
      selectReferenceValue:'',
      isQuiz : 'No',
      isLoader:true,
      questions:''
     }
     this.handleLevelChange = this.handleLevelChange.bind(this);
     this.handleCategoryChange=this.handleCategoryChange.bind(this);
     this.handleThemeChange = this.handleThemeChange.bind(this);
     this.handleTitleChange=this.handleTitleChange.bind(this);
     this.handleNameChange=this.handleNameChange.bind(this);
     this.handleKeyWordChange=this.handleKeyWordChange.bind(this);
     this.handleIntroductoryChange=this.handleIntroductoryChange.bind(this);
     this.handleDiscussionChange=this.handleDiscussionChange.bind(this);
     this.handleConclusionChange=this.handleConclusionChange.bind(this);
     this.handleVideoLinkChange=this.handleVideoLinkChange.bind(this);
     this.handleImageLinkChange=this.handleImageLinkChange.bind(this);
     this.handleMustReadChange=this.handleMustReadChange.bind(this);
     this.handleReferenceChange=this.handleReferenceChange.bind(this);
     this.handleQuiz=this.handleQuiz.bind(this);
     this.handleUpload=this.handleUpload.bind(this);
     this.handleQuestionsans=this.handleQuestionsans.bind(this);

   }
   handleLevelChange(e)
   {
    this.setState({ selectLevelValue: e.target.value });
   }
   handleCategoryChange(e)
   {
     this.setState({selectCategoryValue : e.target.value})
   }
   handleThemeChange(e)
   {
    this.setState({selectThemeValue : e.target.value})
   }
   handleTitleChange(e)
   {
    this.setState({selectTitleValue : e.target.value})
   }
   handleNameChange(e)
   {
    this.setState({selectNameValue : e.target.value})
   }
   handleKeyWordChange(e){
    this.setState({selectKeywordValue : e.target.value})
   }
   handleIntroductoryChange(e)
   {
    this.setState({selectIntroductoryValue : e.target.value})
   }
   handleDiscussionChange(e)
   {
    this.setState({selectDiscussionValue : e.target.value})
   }
   handleVideoLinkChange(e)
   {
    this.setState({selectVideoLinkValue : e.target.value})
   }
   handleImageLinkChange(e)
   {
    this.setState({selectImageLinkValue : e.target.value})
   }
   handleMustReadChange(e)
   {
    this.setState({selectMustReadValue : e.target.value})
   }
   handleReferenceChange(e)
   {
    this.setState({selectReferenceValue : e.target.value})
   }
   handleConclusionChange(e)
   {
    this.setState({selectConclusionValue : e.target.value})
   }
   handleQuiz(e)
   {
    this.setState({isQuiz : e.target.value})
   }
   handleQuestionsans(inputlist)
   {
     this.setState({questions : inputlist})
   }
   handleUpload()
   {
    this.setState({isLoader : false});
    var d = new Date()
    if(this.state.theme !== '')
    {
      const payload = {
        theme: this.state.selectThemeValue,
        level: this.state.selectLevelValue,
        category: this.state.selectCategoryValue,
        title: this.state.selectTitleValue,
        by:this.state.selectNameValue,
        keywords:this.state.selectKeywordValue,
        intropara:this.state.selectIntroductoryValue,
        discpara:this.state.selectDiscussionValue,
        concpara:this.state.selectConclusionValue,
        videourl:this.state.selectVideoLinkValue,
        imageurl:this.state.selectImageLinkValue,
        mustread:this.state.selectMustReadValue,
        references:this.state.selectReferenceValue,
        question:this.state.questions,
        isActive:'true',
        isApproved:'true',
        created_by:'rohit',
        updated_by:'rohit',
        updated_date:'',
      };

    //console.log(JSON.parse(JSON.stringify(payload)));
    var ss = JSON.stringify(payload);
    console.log(ss);
    const options = {
      headers: {'Content-Type': 'application/json'}
    };

    API.post('/topics/create',
      ss)
      .then(res =>  {
        alert('Topic Added Successfully');
        this.setState({isLoader : true});
        console.log(res)
      
      })
      .catch(err => {
        this.setState({isLoader : true});
        console.log(err)});
    }
    else
    {
      this.setState({isLoader : true});
      alert('Please fill all the required field');
    }
   }
  
  render(){
    return (
      <section>
        <div style={{textAlign : 'center'}}>
          {/* <Loader
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    visible= {this.state.isLoader}
   // timeout={3000} //3 secs

 /> */}
 <Loader loaded={this.state.isLoader} style={{position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '',
  background: 'none repeat scroll 0 0 black',
  opacity:'0.5',
  zIndex: '9999',
  }}></Loader>
          </div>
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
      <select value={this.state.selectThemeValue} onChange={this.handleThemeChange}>
          <option value="Please Select">Please Select</option>
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
      <select value={this.state.selectLevelValue} onChange={this.handleLevelChange}>
          <option value="Please Select">Please Select</option>
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
    <select value={this.state.selectCategoryValue} onChange={this.handleCategoryChange}>
    <option value="Please Select">Please Select</option>
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
  <input type="text" value = {this.state.selectTitleValue}onChange = {this.handleTitleChange}name="title" className="form-control input-border pl-4" placeholder="Topic Title"/>
</div>
<div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-3">
  <input type="text" value = {this.state.selectNameValue}onChange = {this.handleNameChange} name="by" className="form-control input-border pl-4" placeholder="By ( Name )"/>
</div>
<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 order-4">
  <input type="text" value = {this.state.selectKeywordValue}onChange = {this.handleKeyWordChange} name="keywords" className="form-control input-border full-width pl-4" placeholder="Keywords"/>
</div>
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-1">
  Introductory Text :
</div>
<div className="col-lg-7 col-md-4 col-sm-6 col-xs-12 order-2">
  <textarea value = {this.state.selectIntroductoryValue}onChange = {this.handleIntroductoryChange} name="IntroPara" className="form-control multiline-text full-width pl-4 editor" placeholder="Type here.."> </textarea>
</div>
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 order-1">
  Discussion Text :
</div>
<div className="col-lg-7 col-md-8 col-sm-6 col-xs-12 order-2">
  <textarea value = {this.state.selectDiscussionValue}onChange = {this.handleDiscussionChange}  name="DiscPara" className="form-control multiline-text full-width pl-4 editor" placeholder="Type here.."> </textarea>
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
  <textarea value = {this.state.selectConclusionValue}onChange = {this.handleConclusionChange} name="ConcPara" className="form-control multiline-text full-width pl-4 editor" placeholder="Type here.."> </textarea>
</div>
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 md-4 col-sm-6 col-xs-12 order-1">
 Video Link/ Embed Code :
</div>
<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 order-2">
<input type="text" value = {this.state.selectVideoLinkValue}onChange = {this.handleVideoLinkChange} name="VideoLink" className="form-control input-border full-width pl-4" placeholder="Copy link or type URL"/>
</div>
<div className="col-lg-4 col-md-5 col-sm-6 col-xs-12 order-3">
 <div className="row">
  <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order 1 text-right pt-2">
    Image Link :
  </div>
  <div className="col-lg-8 col-md-6 col-sm-6 col-xs-12 order-2">
   <input type="text" value = {this.state.selectImageLinkValue}onChange = {this.handleImageLinkChange} name="ImageLink" className="form-control input-border full-width" placeholder="Copy link or Add"/>
  </div>
 </div>
</div>
</div>
<div className="row item-margin mt-3">
 <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
    Must Read :
 </div>
 <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
  <textarea value = {this.state.selectMustReadValue}onChange = {this.handleMustReadChange} name="mustRead" className="form-control multiline-text full-width pl-4" placeholder="Type here.."> </textarea>
 </div>
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
   References :
</div>
<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
 <textarea value = {this.state.selectReferenceValue}onChange = {this.handleReferenceChange} name="references" className="form-control multiline-text full-width pl-4" placeholder="Mention References"> </textarea>
</div>
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
  Add Quiz :
</div>
<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
  <input type="button" className="button" value="Yes" onClick={this.handleQuiz} />
  <input type="button" className="button ml-2" value="No" onClick={this.handleQuiz}/>
</div>
</div>
<AddQuestion onSelectQuestionsans={this.handleQuestionsans}/>
<div className="row col form-group item-margin mt-3">
<div className="col-lg-1 col-md-2 col-sm-6 col-xs-6">
  <input type="button" className="button" value="Upload" onClick ={this.handleUpload} />
</div>
<div className="col-lg-1 col-md-2 col-sm-6 col-xs-6 ml-3">
  <input type="button" className="button pt-1" value="Cancel" />
</div>
</div>
</div>
</section>)

  }
}
// const AddTopic = () => {

//     ;};
                                      
export default AddTopic;
