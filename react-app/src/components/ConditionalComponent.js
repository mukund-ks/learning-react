import { useState } from "react";
import Counter from "./Counter";
import FunctionalCounter from "./FunctionalCounter";


const ConditionalComponent = () => {
    const [display, setDisplay] = useState(); // setting default value of bool display.

    const counter1 = () => {
        setDisplay(true);
    };

    const counter2 = () => {
        setDisplay(false);
    };

    let output;
    if (display) {
        output = <Counter />;
    } else {
        output = <FunctionalCounter />;
    }

    return (
        <div>
            <button onClick={counter1}>Show Click Counter.</button>
            <button onClick={counter2}>Show Functional Counter.</button>
            <div>
                {output}
            </div>
            <h3>This is a Conditional Component.</h3>
        </div>
    );
};

export default ConditionalComponent;