import React, { Component } from "react";

class Index extends Component{
    constructor()
    {
        super()
        this.state={
            fname:"",
            name:"",
            lastname:"",
            name1:""
        }
    }
   handleChange=(e)=>{
        //console.log(e.target.value)
        this.setState({fname:e.target.value})
        
   }
   handleChange1=(e)=>{
    
    this.setState({lastname:e.target.value})
    
}
   handleClick=(e)=>{
        this.setState({name:this.state.fname})
        this.setState({name1:this.state.lastname})
   }
    render()
    {
        return <div>
            <label>first name</label><br></br>
            <input type="text" value={this.state.fname} onChange={this.handleChange}/><br></br>
            <label>last name</label><br></br>
            <input type="text" value={this.state.lastname} onChange={this.handleChange1}/><br></br>
            <button onClick={this.handleClick}>full name</button><br></br>
            {this.state.name}{this.state.name1}
            </div>
    }
}

export default Index