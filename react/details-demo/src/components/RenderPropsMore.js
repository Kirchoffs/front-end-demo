import React from 'react';

function getUserName() {
  return 'John Doe';
}

const Login = (props) => {
  const userName = getUserName();

  if (userName) {
    const allProps = {userName, ...props};
    return (
      <React.Fragment>
        {props.children(allProps)}
      </React.Fragment>
    );
  } else {
    return null;
  }
};

const Auth = (props) => {
  const userName = getUserName();

  if (userName) {
    const allProps = {userName, ...props};
    return (
      <React.Fragment>
        {props.login(allProps)}
      </React.Fragment>
    );
  } else {
    <React.Fragment>
      {props.nologin(props)}
    </React.Fragment>
  }
};

const RenderPropsMore = () => {
  return (
    <div>
      <div>
        <Login>
          {({userName}) => <h3>(Login) Hello {userName}</h3>}
        </Login>
      </div>
      <div>
        <Auth
          login={({userName}) => <h3>(Auth) Hello {userName}</h3>}
          nologin={() => <h3>Please login</h3>}
        />
      </div>
    </div>
  )
}

export default RenderPropsMore;