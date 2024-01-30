import React,{Component}from "react";
class Abc extends React.Component
{
    constructor()
    {
        super()
        this.state={
            val1:"",
            // val2:"",
            // val3:""
        }
    }
    handlechange=(e)=>{
        this.setState({val1:e.target.value})
        //this.state.val1=e.target.value
        
    }
// handlechange1=(e)=>{
//     this.setState({val2:e.target.value})
// }
// handleclick=(e)=>{
//     this.setState({val3:this.state.val2+" "+this.state.val1})
//}
    render()
    {
        return <div>

            <input type="number" value={this.state.val1} onChange={this.handlechange} />
            <br/>
            {this.state.val1}
            {/* <label>full name</label>
            <input type="string" value={this.state.val2} onChange={this.handlechange1}/>
            <button onClick={this.handleclick}>click</button>
            {this.state.val3} */}

        </div>
    }
    
}
export default Abc;