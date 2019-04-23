import {
  FETCH_PAINTINGS,
  DELETE_PAINTING
} from '../actions/types'


const initialState = []

const paintingsReducer = (state = initialState, action) => {
  console.log('IN the PAINTINGS REDUCER: action', action);
  console.log('IN the PAINTINGS REDUCER: state', state);
  switch(action.type) {
    case FETCH_PAINTINGS:
      return action.payload
    case DELETE_PAINTING:
      return state.filter(pntg => pntg.id !== action.payload)
    default:
      return state
  }
}

export default paintingsReducer
