import React,{Component}from "react"
class Abc extends Component
{
    constructor()
    {
        super()
        this.a=20
    }
    render()
    {
        let b="Youdev Academy"
        return (<div>hello world
            <p>Value of a is {this.a}{b}</p>
        </div>)
    }
}
export default Abc