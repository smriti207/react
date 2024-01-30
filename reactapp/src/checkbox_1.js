import React, { Component } from "react";
class Control2 extends Component {
    constructor() {
        super()
        this.state = {
            val: "",
            val1: ""
        }

    }
    handleChange = (e) => {
        console.log(e.target.checked)
        alert(e.target.value)
        alert(e.target.name)
        alert(e.target.checked)
        
        this.setState({ val:e.target.value })
    }
    
    render() 
    {
        return <div>
            
        <input type="checkbox" id="html" name="fav_language" value="HTML" onChange={this.handleChange}/>
        <label for="html">HTML</label>
        <input type="checkbox" id="css" name="fav_language" value="CSS" onChange={this.handleChange}/>
        <label for="css">CSS</label>
        <input type="checkbox" id="javascript" name="fav_language" value="JavaScript" onChange={this.handleChange}/>
        <label for="javascript">JavaScript</label>


        <br/>
        {this.state.val}
        </div> 

                                
    }
}
                                export default Control2 