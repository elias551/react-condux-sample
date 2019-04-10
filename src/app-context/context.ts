import * as React from "react";
import { ContextState } from "./contextState";
import { createDispatch } from "./condux";

export const AppContext = React.createContext({
  currentValue: 0
} as ContextState);

interface Props {
  defaultValue?: number;
}

export class AppContextProvider extends React.PureComponent<
  Props,
  ContextState
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      currentValue: props.defaultValue || 0,

      dispatch: createDispatch(() => this.state, this.setState.bind(this))
    };
  }

  public render() {
    return React.createElement(AppContext.Provider, {
      value: this.state,
      children: this.props.children
    });
  }
}
