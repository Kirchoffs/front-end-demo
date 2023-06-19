import React from 'react';

const ControlButtons = (props) => {
  const {state, onStart, onPause, onReset, onSplit} = props;
  switch (state) {
    case "SLEEP":
      return (
        <div className="button-holder">
          <button onClick={onReset} disabled>Lap</button>
          <button onClick={onStart}>Start</button>
        </div>
      );
    case "RUNNING":
      return (
        <div className="button-holder">
          <button onClick={onSplit}>Lap</button>
          <button onClick={onPause}>Stop</button>
        </div>
      );
    case "PAUSED":
      return (
        <div className="button-holder">
          <button onClick={onReset}>Reset</button>
          <button onClick={onStart}>Start</button>
        </div>
      );
  }
}

export default ControlButtons;