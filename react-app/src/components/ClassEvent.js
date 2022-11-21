import { Component } from "react";

class ClassEvent extends Component {
    handleClick(){
        console.log('Button Clicked through Class Component.');
    }
    render(){
        return (
            <div>
                Class Component
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default ClassEvent;