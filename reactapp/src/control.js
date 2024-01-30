import React,{Component}from "react";
class Control extends Component{
    constructor()
    {
        super()
        this.state={
            val:"",
            val1:""
        }

    }
    handleChange=(e)=>{
        console.log(e)
        this.setState({val:e.target.value})
    }
    handleClick=(e)=>{
        this.setState({val1:this.state.val})
    }
    render()
    {
        return <div><select value={this.state.val} onChange={this.handleChange}> 
            <option value="">Select</option>
            <option value="mango">mango</option>
            <option value="apple">apple</option>
            <option value="banana">banana</option>
            <option value="litchi">litchi</option>

        </select>
        <button onClick={this.handleClick}>Click</button>
        {this.state.val1}
        </div> 
    }
}
export default Control