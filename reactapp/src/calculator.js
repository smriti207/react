import React,{Component}from "react";
import "./calculator.css";
class Calculator extends Component
{
    constructor()
    {
        super()
        this.state={
            input:"",
            result:"",
            
        };
    }
    handleClick = () => {
      this.setState((prevState) => {
       return{ input: prevState.input + 1}
      }
      )
    }
    }
    handleClear = () => {
      this.setState({
        input: "",
        result: ""
      });
    };
  
    handleCalculate = () => {
      
        var result = eval(this.state.input);
    
        





    }
  
      
    
  

    render()
    {
    
      return (
      <div className="Calculator">
        <div className="calculation">
          <div className="display">
            <input type="text" value={this.state.input} readOnly />
          </div>
          <div className="buttons">
          <div className="row">
            <button onClick={this.handleClick('1')}>1</button>
            <button onClick={this.handleClick('2')}>2</button>
            <button onClick={this.handleClick('3')}>3</button>
            <button onClick={this.handleClick('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={this.handleClick('4')}>4</button>
            <button onClick={this.handleClick('5')}>5</button>
            <button onClick={this.handleClick('6')}>6</button>
            <button onClick={this.handleClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={this.handleClick('7')}>7</button>
            <button onClick={this.handleClick('8')}>8</button>
            <button onClick={this.handleClick('9')}>9</button>
            <button onClick={this.handleClick('*')}>*</button>
          </div>
          <div className="row">
            <button onClick={this.handleClick('0')}>0</button>
            {/* <button onClick={this.handleClear}>C</button>
            <button onClick={this.handleCalculate}>=</button> */}
            <button onClick={this.handleClick('/')}>/</button>
          </div>
          <div>
            <p>Result: {this.state.result}</p>
          </div>
        </div>
        </div>
        </div>
      )
    }
  
 
  
export default Calculator;

