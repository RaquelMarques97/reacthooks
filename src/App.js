import React, { useState } from 'react';

function Counter() {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  const [count, setCount] = useState(0);


  return (
    <div>
      <label>Set initial count to:</label>
      <input type='number' onChange={(e) => setCount(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value))}></input>

      <button onClick={() => setCount(count + 1)}>>
        +1
      </button>

      <button onClick={() => setCount(count - 1)}>>
        -1
      </button>
      <p>The actual count is:{count}</p>
    </div>
  );
}

export default Counter;