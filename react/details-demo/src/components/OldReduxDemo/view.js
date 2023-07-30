const style = {
  marginBottom: "10px",
}

const CounterView = ({count, onIncrement}) => {
    return (
      <div>
        <div style={style}>Counter: {count}</div>
        <button onClick={onIncrement} className="btn-primary">Plus</button>
      </div>
    );
  };

  export default CounterView;
