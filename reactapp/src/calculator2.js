import React,{Component}from "react";
import "./calculator.css";
class Calculator extends Component
{
    constructor()
    {
        super()
        this.state={
            input:"",
            result:""
        }
    }
    handleclick=(value)=>{
        
        this.setState((prevState)=>({
            input: prevState.input + value,})
        )
        
    } 
    handlecal=()=>{
        
    
            this.setState({
              result: eval(this.state.input).toString(),
            });
          
         
    }
    handleClear = () =>{
        this.setState({
            input: '',
            result: '',
          });
            
     };
    render()
    {
       var abc=[0,1,2,3]
        var a=0
        var abc1=[5,6,7,8]
        var abc2=[9,"+","-","*"]
            var x=(value,a) => {
                return <div>
                    <button onClick={() =>this.handleclick(value)}>{value}</button>
                    
                </div>
            };
            var y=(value,a)=>{
                return <div>
                    <button onClick={() =>this.handleclick(value)}>{value}</button>
                </div>
            };
            var z=(value,a)=>{
               return <div>
                    <button onClick={() =>this.handleclick(value)}>{value}</button>
                </div>
            }
                var a=abc.map(x)
                var b=abc1.map(y)
                var c=abc2.map(z)
        return <div>
             <div className="Calculator">
            <div className="calculation">    
            <div className="buttons">
            <div className="display"> 
            <div>
             <input type="text" value={this.state.input}  />   
                </div>    
            {/* <div className="row">   
            <button onClick={() => this.handleclick('1')}>1</button>
            <button onClick={() =>this.handleclick("2")}>2</button>
            <button onClick={() =>this.handleclick("3")}>3</button>
            <button onclick={() =>this.handleclick("4")}>4</button>
            </div> */}
            <div className="row">
                {a}
            </div><br/>
            <div className="row">
                {b}
            </div><br/>
            <div className="row">
                {c}
            </div><br/>

            
            {/* <div className="row">   
            <button onClick={() =>this.handleclick("5")}>5</button>
            <button onClick={() =>this.handleclick("6")}>6</button>
            <button onClick={() =>this.handleclick("7")}>7</button>
            <button onClick={() =>this.handleclick("8")}>8</button>
            </div>
            <div className="row">   
            <button onClick={() =>this.handleclick("9")}>9</button>
            <button onClick={() =>this.handleclick("+")}>+</button>
            <button onClick={() =>this.handlecal(".")}>.</button>
            <button onClick={() =>this.handleclick("*")}>*</button>
            </div> */}
            <div className="row">   
            <button onClick={this.handleClear}>c</button>
            <button onClick={() =>this.handleclick(".")}>.</button>
            <button onClick={this.handlecal}>=</button>
            <button onClick={() =>this.handleclick("/")}>/</button>
            </div>
            
            <div>
          <p>Result: {this.state.result}</p>
        </div>
        </div>
         </div>
         </div>
         </div>
        </div>
        
    }
}
export default Calculator;