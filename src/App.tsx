import React from "react";

import "./App.css";
import { AppContextProvider } from "./app-context/context";
import { Incrementor } from "./Incrementor";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppContextProvider defaultValue={5}>
            <Incrementor />
          </AppContextProvider>
        </header>
      </div>
    );
  }
}

export default App;
