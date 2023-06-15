import React from "react";

const withWindowSize = Component => {
  class WrappedComponent extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        size: this.getSize()
      };
    }

    componentDidMount() {
      window.addEventListener("resize", this.handleResize); 
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }

    getSize() {
      return window.innerWidth > 1000 ? "large" : "small";
    }

    handleResize = ()=> {
      const currentSize = this.getSize();
      this.setState({
        size: currentSize
      });
    }

    render() {
      return <Component size={this.state.size} />;
    }
  }

  return WrappedComponent;
};

class SmallComponent extends React.Component {
  render() {
    const style = {
      color: "white",
      backgroundColor: "SteelBlue",
      width: "400px",
      padding: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "5px",
      textAlign: "center"
    }
    return <div style={style}>I am a small component from function component</div>;
  }
}

class LargeComponent extends React.Component {
  render() {
    const style = {
      color: "white",
      backgroundColor: "DarkSalmon",
      width: "500px",
      padding: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "5px",
      textAlign: "center"
    }
    return <div style={style}>I am a large component from class component</div>;
  }
}

class SizeVariableClassComponent extends React.Component{
  render() {
    const { size } = this.props;
    if (size === "small") return <SmallComponent />;
    else return <LargeComponent />;
  }
}

export default withWindowSize(SizeVariableClassComponent); 