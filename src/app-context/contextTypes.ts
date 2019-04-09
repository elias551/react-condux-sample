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
