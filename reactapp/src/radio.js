import React, { Component } from "react";
class Control1 extends Component {
    constructor() {
        super()
        this.state = {
            val: "",
            val1: ""
        }

    }
    handleChange = (e) => {
        console.log(e)
        this.setState({ val: e.target.value })
    }
    handleClick = (e) => {
        this.setState({ val1: this.state.val })
    }
    render() 
    {
        return <div>
            
        <input type="radio" id="html" name="fav_language" value="HTML" onChange={this.handleChange}/>
        <label for="html">HTML</label>
        <input type="radio" id="css" name="fav_language" value="CSS" onChange={this.handleChange}/>
        <label for="css">CSS</label>
        <input type="radio" id="javascript" name="fav_language" value="JavaScript" onChange={this.handleChange}/>
        <label for="javascript">JavaScript</label>


<button onClick={this.handleClick}>Click</button>
        {this.state.val1}
        </div> 

                                
    }
}
                                export default Control1 