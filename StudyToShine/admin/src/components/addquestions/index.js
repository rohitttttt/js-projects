import React from "react";
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class AddQuestions extends React.Component {
    constructor(props)
    {
        super(props);
        this.state ={
          inputList : [ {
            enterquestion1 : '',
            option1:'',
            option2:'',
            correctanswer:'',
            AddAnotheroption:''

          }],
          inputOption: [ {
            option3:'',
            option4:'',
          }]
        }
        this.handleAddClick= this.handleAddClick.bind(this);
        this.handleOptionClick=this.handleOptionClick.bind(this);
    }
    handleOptionClick()
    {
     
      // this.setState(prevState => ({
      //   inputOption: [...prevState.inputOption, { option3 : '',
      //   option4:''
      //    }]
      // }));
    }
    handleAddClick()
    {
      this.setState(prevState => ({
        inputList: [...prevState.inputList, { enterquestion1 : '',
        option1:'',
        option2:'',
        correctanswer:'' }]
      }));
    }

    render(){

      return(
        <div >
          <div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
  <h3>Quiz</h3>
</div>
</div>
          {this.state.inputList.slice(0, 4).map((x, i) => {
            return (
              <div>

<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
  Enter Question {i +1} :
</div>
<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
  <input type="text" name="ques1" value = {x.enterquestion1}className="form-control input-border full-width" placeholder="Type here.."/>
 </div>
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
  Option 1 :
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 order-2">
  <input type="text" name="ansCh1" value = {x.option1}className="form-control input-border full-width" placeholder="Answer Choice"/>
 </div>
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
  Option 2 :
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 order-2">
  <input type="text" name="ansCh2" value={x.option2}className="form-control input-border full-width" placeholder="Answer Choice"/>
 </div>
 {this.state.inputOption.length - 1 === i && <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 addCategoryLink order-3" onClick={this.handleOptionClick}>
   + Add Another Options
 </div>}
 
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
  Correct Answer :
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 order-2">
  <input type="text" name="ans1" value={x.correctanswer}className="form-control input-border full-width" placeholder="Right Answer"/>
 </div>
</div>
<div className="row item-margin mt-3">
{this.state.inputList.length - 1 === i && <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 addCategoryLink" onClick={this.handleAddClick}>
+ Add Another Question
</div>}

 </div>
              </div>
            );
          })}
          
        </div>
      );
    }      
}
export default AddQuestions;