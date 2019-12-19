import React, { useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import AppContext from "./AppContext";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  const handleDecrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <HashRouter>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <AppContext.Provider
          value={{
            count,
            handleIncrementCount,
            handleDecrementCount
          }}
        >
          <Switch>
            <Route path="/page1" render={() => <Page1 />} />
            <Route path="/" render={() => <Page2 />} />
          </Switch>
        </AppContext.Provider>
      </div>
    </HashRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
