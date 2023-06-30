import React from 'react';

const RenderAll = (props) => {
  return(
    <React.Fragment>
      {props.children(props)}
    </React.Fragment>
  );
};

const RenderProps = (props) => {
  return (
    <RenderAll> 
      {
        () => {
          return <h1>Hello World</h1>
        }
      }
    </RenderAll>
  );
}

export default RenderProps;