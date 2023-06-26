import React from "react";

const happyMood = {
  submit: "Submit with smile",
  cancel: "Cancel with smile"
}

const sadMood = {
  submit: "Submit with frown",
  cancel: "Cancel with frown"
}

const MoodContext = React.createContext(happyMood);

const consumerContainerStyle = {
  padding: "10px 0",
}

const buttonStyle = {
  marginRight: "5px",
}

class MoodProvider extends React.Component {
  state = { mood: happyMood };
  
  toggleMood = () => {
    const mood = this.state.mood === happyMood ? sadMood : happyMood;
    this.setState({ mood });
  };

  render() {
    return (
      <MoodContext.Provider value={this.state.mood}>
        <button className="btn-primary" onClick={this.toggleMood}>Toggle Mood</button>
        {this.props.children}
      </MoodContext.Provider>
    )
  }
}

class MoodButtons extends React.Component {
  render() {
    return (
      <MoodContext.Consumer>
        {
          mood => (
            <div>
              <button style={buttonStyle} className="btn-primary">{mood.submit}</button>
              <button style={buttonStyle} className="btn-primary">{mood.cancel}</button>
            </div>
          )
        }
      </MoodContext.Consumer>
    )
  }
}

const ContextAPIDemo = () => (
  <div>
    <MoodProvider>
      <div style={consumerContainerStyle}>
        <MoodButtons />
      </div>
    </MoodProvider>
  </div>
);

export default ContextAPIDemo;