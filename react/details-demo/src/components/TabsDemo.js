import React from "react";
import { Fragment } from "react";

class Tabs extends React.Component {
  state = {
    activeIndex: 0
  }

  render() {
    const newChildren = React.Children.map(this.props.children, (child, index) => {
      if (child.type) {
        return React.cloneElement(child, {
          active: this.state.activeIndex === index,
          onClick: () => this.setState({activeIndex: index})
        });
      } else {
        return child;
      }
    });

    return (
      <Fragment>
        {newChildren}
      </Fragment>
    );
  }
}

const TabItem = (props) => {
  const { active, onClick } = props;
  const tabStyle = {
    maxWidth: '150px',
    padding: '10px',
    color: active ? 'orange' : 'green',
    border: active ? '1px orange dashed' : '0px',
    borderRadius: '10px',
  };
  
  return (
    <h3 style={tabStyle} onClick={onClick}>
      {props.children}
    </h3>
  );
};

const TabsDemo = () => {
  return (
    <Tabs>
      <TabItem>Tab 1</TabItem>
      <TabItem>Tab 2</TabItem>
      <TabItem>Tab 3</TabItem>
    </Tabs>
  );
};

export default TabsDemo;