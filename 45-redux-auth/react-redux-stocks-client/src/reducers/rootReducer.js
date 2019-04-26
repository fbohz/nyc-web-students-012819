import { combineReducers } from 'redux'
import userReducer from './userReducer'
import stocksReducer from './stocksReducer'

// this is our new state 
// {
//   user: {username: 'whatever'},
//   stocks: [stock1, stock2, ...]
// }

// store = {
//   user: {ID: 1, UN: QUEEN ELIZABETH},
//   stocks: [],
//   animals: []
// }

const rootReducer  = combineReducers({
  user: userReducer,
  stocks: stocksReducer
})

export default rootReducer