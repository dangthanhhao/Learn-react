import React, {useState} from "react";
function CounterWithHook() {

    const [count, setCount] = useState(0);

    return (
        <div style={{padding: '20px', border: '1px solid blue'}}>
            <h2>Counter with useState Hook</h2>
            <p>Current Count: <strong>{count}</strong></p>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

            <button onClick={() => setCount(count -1)}>
                Decrement
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>

            {/* New button to increment by 5 */}
            <button onClick={() => setCount(count + 5)}>
                Increment by 5
            </button>
        </div>
    );
}

export default CounterWithHook;