import React from "react";

/* Navigation */
import Navigator from "./navigation/index";

/* Redux */
import { Provider } from "react-redux"
import store from "./store";

/* DB */
import { init } from "./db/index";

init()
  .then(() => console.log("DB initialized"))
  .catch((err) => {
    console.log("DB fail")
    console.log(err.message)
  })

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;