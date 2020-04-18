import React from "react"

import "./App.css"
import { AppContextProvider, useAppContext, actions } from "./context"

export const App = () => (
  <div className="App">
    <header className="App-header">
      <AppContextProvider initialValue={{ currentValue: 5 }}>
        <ContextConsumer />
      </AppContextProvider>
    </header>
  </div>
)

export const ContextConsumer = () => {
  const { currentValue, dispatch } = useAppContext()

  const increment = () => dispatch(actions.increment())
  const decrement = () => dispatch(actions.decrement())

  return (
    <div>
      <p>Current value: {currentValue}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
