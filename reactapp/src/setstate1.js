import React, { Component } from "react";

class Obj extends Component{
    constructor()
    {
        super()
        this.state={
            name:"Smriti",
            number:12345
        }
    }
    click1=()=>
    {
        this.setState({name:"Prajakta"})
        
       
    }
    click2=()=>
    {
        
        this.setState({number:54321})
       
    }
    render()
    {

        return (<div>
        {this.state.name}        
        <button onClick={this.click1}>Submit</button>
        {this.state.number}        
        <button onClick={this.click2}>Submit</button>
        </div>)
    }
}

export default Obj