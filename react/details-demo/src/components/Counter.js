import React from "react";

function CountLabel({ count }) {
  const color = count > 10 ? "SteelBlue" : "black";  
  return (
    <span style={{ color }}>
      {count}
    </span>
  );
}

const Counter = () => {
  const [count, setCount] = React.useState(0);  
  return (
    <div>
      <div>
        <b>Counter:</b> <CountLabel count={count} />
      </div>
      <br/>
      <button className="btn-primary" onClick={() => setCount(count + 1)}>Add One</button>    
    </div>  
  );
}

export default Counter;