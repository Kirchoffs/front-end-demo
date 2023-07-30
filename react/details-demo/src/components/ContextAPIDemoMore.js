import React from "react";

const ThemeContext = React.createContext();
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

const Paragraph = (props, context) => {
  return (
    <ThemeConsumer>
      {
        (theme) => (
          <p style={{color: theme.textColor}}>
            {props.children}
          </p>
        )
      }
    </ThemeConsumer>
  );
};

const ContextAPIDemoMore = () => (
  <div>
    <ThemeProvider value={{ textColor: "red" }}>
      <Paragraph>
        This is a paragraph
      </Paragraph>
    </ThemeProvider>
  </div>
);

export default ContextAPIDemoMore;
