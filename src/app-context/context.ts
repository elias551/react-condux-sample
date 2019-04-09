import produce from "immer";
import * as React from "react";
import { ContextState } from "./contextState";
import {
  DispatchAction,
  UpdateAction,
  ProduceStateAction
} from "./contextTypes";

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

      dispatch: this.dispatch
    };
  }

  public render() {
    return React.createElement(AppContext.Provider, {
      value: this.state,
      children: this.props.children
    });
  }

  private dispatch: DispatchAction<ContextState> = <ReturnType>(
    updateAction: UpdateAction<ContextState, ReturnType>
  ) => updateAction(this.produceState, () => this.state);

  private produceState: ProduceStateAction<ContextState> = <T>(
    updateAction: (draft: ContextState) => T
  ) =>
    new Promise<T>((resolve, reject) => {
      try {
        let result: T = (undefined as any) as T;
        this.setState(
          state =>
            produce(state, draft => {
              result = updateAction(draft);
            }),
          () => resolve(result)
        );
      } catch (e) {
        reject(e);
      }
    });
}
