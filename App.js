import React from 'react';
//making class component
import Input from "./input";
import Operator from "./operator";
class App extends React.Component{
  state={
    currinp:""
    
  }
  //function to show op
  handleop=(val)=>{
     if(val==="="){
       this.calculate();
     }
     else if(val==="C"){
       this.clear();
     }
     else{
       let newval=this.state.currinp +val;
       this.setState({currinp:newval})
     }
  }
  //write function to clear and calculate
  clear=()=>{
    this.setState({currinp:""})
  }
  calculate=()=>{
    var checkres=""
    checkres=this.state.currinp;
    try{
      this.setState({
        currinp:(eval(checkres))
      })
    }
    catch{
      this.setState({
        currinp:"error"
      })
    }
  }
  render=()=>{
    return(
        <div>
          <h2>Calculator</h2>
          {/* here we make props */}
         <Input currinp={this.state.currinp}/>
         <Operator handleop={this.handleop}/>
         
        </div>
    )
      
      
    
  }
};
export default App;
