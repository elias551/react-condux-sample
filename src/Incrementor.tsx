import { useContext, useCallback } from "react";
import { AppContext } from "./app-context/context";
import { incrementAction, decrementAction } from "./app-context/actions";
import React from "react";

export const Incrementor = () => {
  const context = useContext(AppContext);
  const increment = useCallback(() => context.dispatch(incrementAction()), []);
  const decrement = useCallback(() => context.dispatch(decrementAction()), []);

  return (
    <div>
      <p>Current value: {context.currentValue}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
