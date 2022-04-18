import React from "react";

/* Navigation */
import Navigator from "./navigation/index";

/* Redux */
import { Provider } from "react-redux"
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;