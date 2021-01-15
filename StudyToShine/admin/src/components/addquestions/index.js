import React from "react";
import './index.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import AddOptions from "../addoptions";

class AddQuestions extends React.Component {
    constructor(props)
    {
        super(props);
        this.state ={
          inputList : [ {
            q1 : '',
            ch1:'',
            ch2:'',
            ch3:'',
            ch4:'',
            ans:'',

          }],
          inputOption: [ {
            option3:'',
            option4:'',
          }],
          showOptions: false
        }
        this.handleAddClick= this.handleAddClick.bind(this);
        this.option1Change=this.option1Change.bind(this);
        this.questionChange=this.questionChange.bind(this);
        this.option2Change=this.option2Change.bind(this);
        this.option3Change=this.option3Change.bind(this);
        this.option4Change=this.option4Change.bind(this);
        this.handleOptionClick=this.handleOptionClick.bind(this);
        this.answerChange=this.answerChange.bind(this);
    }
    handleOptionClick()
    {
     this.setState({showOptions : true});
      // this.setState(prevState => ({
      //   inputOption: [...prevState.inputOption, { option3 : '',
      //   option4:''
      //    }]
      // }));
    }
    option1Change(e , index)
    {
      
      let inputList = [...this.state.inputList];
      let item = {...inputList[index]};
      item.ch1 = e.target.value;
      inputList[index] = item;
      this.setState({inputList});
      
      this.props.onSelectQuestionsans(inputList)
    }
    option2Change(e , index)
    {
      
      let inputList = [...this.state.inputList];
      let item = {...inputList[index]};
      item.ch2 = e.target.value;
      inputList[index] = item;
      this.setState({inputList});
      this.props.onSelectQuestionsans(inputList)
    }
    option3Change(e , index)
    {
      
      let inputList = [...this.state.inputList];
      let item = {...inputList[index]};
      item.ch3 = e.target.value;
      inputList[index] = item;
      this.setState({inputList});
      this.props.onSelectQuestionsans(inputList)
    }
    option4Change(e , index)
    {
      
      let inputList = [...this.state.inputList];
      let item = {...inputList[index]};
      item.ch4= e.target.value;
      inputList[index] = item;
      this.setState({inputList});
      this.props.onSelectQuestionsans(inputList)
    }
    questionChange(e ,index)
    {
      let inputList = [...this.state.inputList];
      let item = {...inputList[index]};
      if(index == 0)
      {
        item.q1= e.target.value;
      }else
      {
     
       delete item['q1'];
      let ind = 'q' + (index + 1);
      var newNum = ind;
      var newVal = e.target.value;


      item[newNum] = newVal;
      
       //item.splice(ind , 0, e.target.value);
      }

      inputList[index] = item;
      this.setState({inputList});
      this.props.onSelectQuestionsans(inputList)
    }
    answerChange(e ,index)
    {
      let inputList = [...this.state.inputList];
      let item = {...inputList[index]};
      item.ans = e.target.value;

      inputList[index] = item;
      this.setState({inputList});
      this.props.onSelectQuestionsans(inputList)
    }
    handleAddClick()
    {
      this.setState(prevState => ({
        inputList: [...prevState.inputList, { q1 : '',
        ch1:'',
        ch2:'',
        ans:'' }]
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
         console.log(this.state.inputList);
         return (
              <div>

<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
  Enter Question {i +1} :
</div>
<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 order-2">
  <input type="text" name="ques1" value = {x.q} onChange = {e => this.questionChange(e , i) }className="form-control input-border full-width" placeholder="Type here.."/>
 </div>
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
  Option 1 :
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 order-2">
  <input type="text" name="ansCh1" value = {x.ch1} onChange = {e => this.option1Change(e , i) }className="form-control input-border full-width" placeholder="Answer Choice"/>
 </div>
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
  Option 2 :
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 order-2">
  <input type="text" name="ansCh2" value={x.ch2} onChange = {e => this.option2Change(e , i) } className="form-control input-border full-width" placeholder="Answer Choice"/>
 </div> 
 {/* {this.state.showOptions ? <AddOptions/> : null}
 <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 addCategoryLink order-3" onClick={this.handleOptionClick}>
   + Add Another Options
 </div> */}
 
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
  Option 3 :
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 order-2">
  <input type="text" name="ansCh1" value = {x.ch3} onChange = {e => this.option3Change(e , i) } className="form-control input-border full-width" placeholder="Answer Choice"/>
 </div>
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
  Option 4 :
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 order-2">
  <input type="text" name="ansCh1" value = {x.ch4} onChange = {e => this.option4Change(e , i) } className="form-control input-border full-width" placeholder="Answer Choice"/>
 </div>
</div>
<div className="row item-margin mt-3">
<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 order-1">
  Correct Answer :
</div>
<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 order-2">
  <input type="text" name="ans1" value={x.ans} onChange = {e => this.answerChange(e , i) } className="form-control input-border full-width" placeholder="Right Answer"/>
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