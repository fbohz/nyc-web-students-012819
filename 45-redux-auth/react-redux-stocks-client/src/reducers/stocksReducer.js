// import types

const initialState = []

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_STOCKS':
      return action.payload
    default:
      return state
  }
}

export default stocksReducer