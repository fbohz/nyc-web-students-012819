import {
  FETCH_PAINTINGS,
  SELECT_PAINTING,
  DELETE_PAINTING
} from '../actions/types'

const initialState = null


const activePaintingIdReducer = (state = initialState, action) => {
  console.log('in the activePaintingIdReducer', action);
  switch(action.type) {
    case SELECT_PAINTING:
      return action.payload
    case DELETE_PAINTING:
      return null
    default:
      return state
  }
  return state
}

export default activePaintingIdReducer
