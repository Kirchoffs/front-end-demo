import React, { useState, useEffect } from "react";

const getSize = () => {
  return window.innerWidth > 1000 ? "large" : "small";
}

const useWindowSize = () => {
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handler = () => {
      setSize(getSize());
    };
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return size;
}

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
    return <div style={style}>I am a large component from function component</div>;
  }
}

const SizeVariableFunctionComponent = () => {
  const size = useWindowSize();
  if (size === "small") return <SmallComponent />;
  return <LargeComponent />;
};

export default SizeVariableFunctionComponent;
