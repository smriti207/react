import React, { Component } from "react";

class Index extends Component{
    constructor()
    {
        super()
        //this.name="Prajakta"
        this.state={
            name:"Smriti"
        }
    }
    handleClick=()=>
    {
        this.setState({name:"Prajakta"})
       
    }
    render()
    {
        let b=20
        //JSX
        return (<div>
        {this.state.name}        
        <button onClick={this.handleClick}>Submit</button>
        </div>)
    }
}

export default Index