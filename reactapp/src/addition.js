import React,{Component}from "react";
import "./cssadd.css"
class Add extends Component
{
    
    constructor()
    {
        super()
        this.state={
            n1:"",
            n2:"",
            b2:""
        }
    }
    handlechange=(e)=>
    {
        this.setState({n1:e.target.value})
    }
    handlechange1=(e)=>
    {
        this.setState({n2:e.target.value})
    }
    addition=()=>{
        this.setState({b2:Number(this.state.n1)+Number(this.state.n2)})
    }
    render()
    {
        return <div>
        
        <input type="number" value={this.state.n1} onChange={this.handlechange} />
        <input type="number" value={this.state.n2} onChange={this.handlechange1} / > 
        <button  className="btn" onClick={this.addition}>add</button>
        {this.state.b2}


         </div>
    }

}
export default Add