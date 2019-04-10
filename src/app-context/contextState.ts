import { DispatchAction } from "./condux";

export interface ContextState {
  currentValue: number;

  dispatch: DispatchAction<ContextState>;
}
