import { useState } from "react";

const FunctionalCounter = () => {
    const [counter, setCounter] = useState(0); // Passing 0 as initial value of the counter.

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <div>Counter Value: {counter}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>

    );
};

export default FunctionalCounter;