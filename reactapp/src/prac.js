import React,{Component}from "react"
class Abc1 extends Component
{
    constructor()
    {
        super()
        this.state={
            val1:"",
            val2:""
        }
    }
    handlechange=(e)=>{
        this.setState({val1:e.target.value})
    }
    handleclick=(e)=>{
        this.setState({val2:this.state.val1+"your phone number"})
    }

    render()
    {
        return <div>
            <label style={{color:"pink"}}>enter number</label>
            <input type="number" value={this.state.val1} onChange={this.handlechange}/>
            <button style={{color:"purple"}} onClick={this.handleclick}>click</button>
            {this.state.val2}
        </div>
    }
}
export default Abc1