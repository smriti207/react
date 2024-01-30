import React, { Component } from "react";

class Index extends Component{
    constructor()
    {
        super()
        //this.name="Prajakta"
        this.state={
            fname:"",
            name:""
        }
    }
   handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({fname:e.target.value})
   }
   handleClick=(e)=>{
        this.setState({name:this.state.fname})
   }
    render()
    {
        return <div>
            <input type="text" value={this.state.fname} onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Get Value</button>
            {this.state.name}
            </div>
    }
}

export default Index