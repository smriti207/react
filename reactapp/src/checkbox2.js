import React, { Component } from "react";
class Control2 extends Component {
    constructor() {
        super()
        this.state = {
            val: 123,
            val1: ""
        }

    }
    handleChange = (e) => {
        console.log(e.target.checked)
        
        
        this.setState({ val:e.target.value })
    }
    
    render() 
    {
        var abc=["HTML","CSS","JavaScript"]
        var a=0
        var b=(value)=>{

            return <div><input type="checkbox"  value={value} onChange={this.handleChange}/>
         <label >{value}</label></div>
         }
        var x=abc.map(b)
        return <div>{x}abc
        {this.state.val}
        </div> 
         
        
        


       
        

                                
    }
}
                                export default Control2 