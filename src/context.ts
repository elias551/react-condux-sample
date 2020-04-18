import { buildContext } from "react-condux"

interface ContextState {
  currentValue: number
}

const { createAction, createActions, useContext, Provider } = buildContext<
  ContextState
>()

export const useAppContext = useContext
export const AppContextProvider = Provider

export const setValueAction = createAction(
  (value: number) => async ({ produceState, getState }) => {
    const state = getState()
    await produceState((draft) => {
      draft.currentValue = state.currentValue + value
    })
  }
)

export const incrementAction = createAction(() => async ({ getState }) => {
  await getState().dispatch(setValueAction(1))
})

export const decrementAction = createAction(() => async ({ getState }) => {
  await getState().dispatch(setValueAction(-1))
})

export const actions = createActions({
  setValue: (value: number) => async ({ produceState, getState }) => {
    const state = getState()
    await produceState((draft) => {
      draft.currentValue = state.currentValue + value
    })
  },
  increment: () => async ({ getState }) => {
    await getState().dispatch(actions.setValue(1))
  },
  decrement: () => async ({ getState }) => {
    await getState().dispatch(actions.setValue(-1))
  },
})
