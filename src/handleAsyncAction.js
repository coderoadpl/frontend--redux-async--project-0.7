import { store } from './store'

import {
  createActionSetLoading,
  createActionSetError,
  createActionRemoveLoading
} from './state/loaders'

export const handleAsyncAction = async (asyncAction, message) => {
  store.dispatch(createActionSetLoading(message))
  try {
    await asyncAction()
  } catch (error) {
    store.dispatch(createActionSetError(error.message || error.data.error.message))
  } finally {
    store.dispatch(createActionRemoveLoading(message))
  }
}
