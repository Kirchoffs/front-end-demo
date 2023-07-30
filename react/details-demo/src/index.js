import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hello from "./components/Hello";
import Dummy from './components/Dummy';
import Counter from './components/Counter';
import UserList from './components/UserList';
import SizeVariableClassComponent from './components/SizeVariableClassComponent';
import SizeVariableFunctionComponent from './components/SizeVariableFunctionComponent';
import ContextAPIDemo from './components/ContextAPIDemo';
import ContextAPIDemoMore from './components/ContextAPIDemoMore';
import JokeDemo from './components/JokeDemo';
import RenderProps from './components/RenderProps';
import RenderPropsMore from './components/RenderPropsMore';
import TabsDemo from './components/TabsDemo';
import ReduxDemo from './components/OldReduxDemo';

const routeMap = {
  "dummy": Dummy,
  "counter": Counter,
  "user-list": UserList,
  "size-variable-class-component": SizeVariableClassComponent,
  "size-variable-function-component": SizeVariableFunctionComponent,
  "context-api-demo": ContextAPIDemo,
  "context-api-demo-more": ContextAPIDemoMore,
  "joke-demo": JokeDemo,
  "render-props": RenderProps,
  "render-props-more": RenderPropsMore,
  "tabs-demo": TabsDemo,
  "redux-demo": ReduxDemo,
}

class App extends React.PureComponent {
  handleLinkClick = key => {
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  }

  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "");
    let CurrentPage = routeMap[currentPage] || Hello;

    return (
      <div className="page">
        <ul className="menu-list">
          {
            Object.keys(routeMap).map(
              key => (
                <li 
                  key={key} 
                  className={key === currentPage ? "is-active" : ""}
                  style={{ listStyle: "none" }}
                >
                  <span className="link" onClick={() => this.handleLinkClick(key)}>
                    {key}
                  </span>
                </li>
              )
            )
          }
        </ul>
        <div className="stage">
          <CurrentPage />
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
