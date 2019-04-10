import { ContextState } from "./contextState";
import { ProduceStateAction } from "./condux";

export const setValueAction = (value: number) => async (
  produceState: ProduceStateAction<ContextState>,
  getState: () => ContextState
) => {
  const state = getState();
  await produceState(draft => {
    draft.currentValue = state.currentValue + value;
  });
};

export const incrementAction = () => async (
  produceState: ProduceStateAction<ContextState>,
  getState: () => ContextState
) => {
  await getState().dispatch(setValueAction(1));
};

export const decrementAction = () => async (
  produceState: ProduceStateAction<ContextState>,
  getState: () => ContextState
) => {
  await getState().dispatch(setValueAction(-1));
};
