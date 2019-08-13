import produce from "immer";

export type DispatchAction<State> = <ReturnType>(
  updateAction: UpdateAction<State, ReturnType>
) => Promise<ReturnType>;

export type UpdateAction<State, ReturnType> = (
  produceState: ProduceStateAction<State>,
  getState: () => State
) => Promise<ReturnType>;

export type ProduceStateAction<State> = <ReturnType>(
  updateAction: (draft: State) => ReturnType
) => Promise<ReturnType>;

export type SetState<State> = (
  setStateAction: (state: State) => void,
  callback: () => void
) => void;

export function produceState<State, ReturnType>(
  setState: SetState<State>,
  updateAction: (draft: State) => ReturnType
): Promise<ReturnType> {
  return new Promise<ReturnType>((resolve, reject) => {
    try {
      let result: ReturnType = (undefined as any) as ReturnType;
      setState(
        (state: State) =>
          produce(state, draft => {
            result = updateAction(draft as State);
          }),
        () => resolve(result)
      );
    } catch (e) {
      reject(e);
    }
  });
}

export const createDispatch = <S>(
  getState: () => S,
  setState: SetState<S>
): DispatchAction<S> => {
  return <ReturnType>(updateAction: UpdateAction<S, ReturnType>) =>
    updateAction(u => produceState(setState, u), getState);
};
