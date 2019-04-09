import { useContext } from "react";
import { AppContext } from "./app-context/context";
import { incrementAction, decrementAction } from "./app-context/actions";
import React from "react";

export const Incrementor = () => {
  const context = useContext(AppContext);
  return (
    <div>
      <p>Current value: {context.currentValue}</p>
      <button onClick={() => context.dispatch(incrementAction())}>
        Increment
      </button>
      <button onClick={() => context.dispatch(decrementAction())}>
        Decrement
      </button>
    </div>
  );
};
