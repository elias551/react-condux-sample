import { buildContext } from "./condux"

export interface ContextState {
  currentValue: number
}

const condux = buildContext<ContextState>({ currentValue: 5 })

export const AppContext = condux.Context
export const AppContextProvider = condux.Provider

export const setValueAction = condux.createAction(
  (value: number) => async (produceState, getState) => {
    const state = getState()
    await produceState((draft) => {
      draft.currentValue = state.currentValue + value
    })
  }
)

export const incrementAction = condux.createAction(
  () => async (_, getState) => {
    await getState().dispatch(setValueAction(1))
  }
)

export const decrementAction = condux.createAction(
  () => async (_, getState) => {
    await getState().dispatch(setValueAction(-1))
  }
)
