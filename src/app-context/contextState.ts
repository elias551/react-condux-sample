import { DispatchAction } from "./contextTypes";

export interface ContextState {
  currentValue: number;

  dispatch: DispatchAction<ContextState>;
}
