import React, { Component } from "react";
import "./calculator.css";
import Button_cal from "./button_cal";
class Calculator extends Component {
    constructor() {
        super()
        this.state = {
            input: "",
            result: ""
        }
    }
    handleclick = (value) => {

        this.setState((prevState) => ({
            input: prevState.input + value,
        })
        )
    }
    handlecal = () => {


        this.setState({
            result: eval(this.state.input).toString(),
        });
    }
    handleClear = () => {
        this.setState({
            input: '',
            result: '',
        });

    };
    render() {
        var abc = [0, 1, 2, 3]
        var abc1 = [5, 6, 7, 8]
        var abc2 = [9, "+", "-", "*"]
        var x = (value) => {
            return (<Button_cal value={(value)}/>)
        };
       
        var a = abc.map(x)
        var b = abc1.map(x)
        var c = abc2.map(x)
        return <div>
            <div className="Calculator">
                <div className="calculation">
                    <div className="buttons">
                        <div className="display">
                            <div>
                                <input type="text" value={this.state.input} />
                            </div>

                            <div className="row">
                                {a}
                            </div><br />
                            <div className="row">
                                {b}
                            </div><br />
                            <div className="row">
                                {c}
                            </div><br />
                            <div className="row">
                                <button onClick={this.handleClear}>c</button>
                                <button onClick={() => this.handleclick(".")}>.</button>
                                <button onClick={this.handlecal}>=</button>
                                <button onClick={() => this.handleclick("/")}>/</button>
                            </div>

                            <div>
                                <p>Result: {this.state.result}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}
export default Calculator;