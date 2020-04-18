import { buildContext } from "react-condux"

interface ContextState {
  currentValue: number
}

const { createActions, useContext, Provider } = buildContext<ContextState>({
  useDebug: true,
})

export const useAppContext = useContext
export const AppContextProvider = Provider

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
