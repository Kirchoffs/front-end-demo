import React, { Fragment } from 'react';
import MajorClock from './MajorClock';
import ControlButtons from './ControlButtons';
import SplitTimes from './SplitTimes';

class StopWatch extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      state: "SLEEP",
      lastPausedTime: 0,
      lastStartTime: 0,
      currentTime: 0,
      accumulativeElapsedTime: 0,
      splits: []
    };
    this.onStart = this.onStart.bind(this);
    this.onSplit = this.onSplit.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onStart = () => {
    let currentTime = new Date().getTime();
    let accumulativeElapsedTime = 0;
    let lastStartTime = currentTime;
    if (this.state.state === "PAUSED") {
      accumulativeElapsedTime = this.state.accumulativeElapsedTime;
      lastStartTime = this.state.lastStartTime + (currentTime - this.state.lastPausedTime);
    }

    this.setState({
      state: "RUNNING",
      lastStartTime: lastStartTime,
      currentTime: currentTime,
      accumulativeElapsedTime: accumulativeElapsedTime,
    });

    this.intervalHandle = setInterval(() => {
      this.setState({
        currentTime: new Date().getTime(),
      });
    }, 100);
  }

  onSplit = () => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - this.state.lastStartTime;
    this.setState({
      lastStartTime: currentTime,
      accumulativeElapsedTime: this.state.accumulativeElapsedTime + elapsedTime,
      splits: [...this.state.splits, elapsedTime]
    });
  }

  onPause = () => {
    const currentTime = new Date().getTime();
    clearInterval(this.intervalHandle);
    this.setState({
      state: "PAUSED",
      lastPausedTime: currentTime,
    });
  }

  onReset = () => {
    this.setState({
      state: "SLEEP",
      lastPausedTime: 0,
      lastStartTime: 0,
      currentTime: 0,
      accumulativeElapsedTime: 0,
      splits: [],
    });
  }

  render() {
    return (
      <Fragment>
        <MajorClock 
          milliseconds={this.state.currentTime - this.state.lastStartTime + this.state.accumulativeElapsedTime} 
          major={true}
        />
        <ControlButtons
          state={this.state.state}
          onStart={this.onStart}
          onSplit={this.onSplit}
          onPause={this.onPause}
          onReset={this.onReset}
        />
        <SplitTimes value={this.state.splits} />
      </Fragment>
    );
  }
}

export default StopWatch;