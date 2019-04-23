import {
  SELECT_PAINTING,
  DELETE_PAINTING,
  FETCH_PAINTINGS
} from '../actions/types'
import paintingsReducer from './paintings'
import activePaintingIdReducer from './activePaintingId'
import { combineReducers } from 'redux'

// const initialState = {
//   paintings: [],
//   activePaintingId: null
// }


// const reducer = (state = initialState, action) => {
//   console.log('action', action);
//   switch(action.type) {
//     case FETCH_PAINTINGS:
//       return {...state, paintings: action.payload}
//     case SELECT_PAINTING:
//       return {...state, activePaintingId: action.payload}
//     case DELETE_PAINTING:
//       return {
//         ...state,
//         activePaintingId: null,
//         paintings: state.paintings.filter(painting => painting.id !== action.payload)
//       }
//     default:
//       return state
//   }
// }

export default combineReducers({
  paintings: paintingsReducer,
  activePaintingId: activePaintingIdReducer
})
