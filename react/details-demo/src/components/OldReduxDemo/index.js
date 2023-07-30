import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./action";

const ReduxDemo = () => (
  <Provider store={store}>
    {
      // All components under this tag can access the store
      <Counter />
    }
  </Provider>
)

export default ReduxDemo;
