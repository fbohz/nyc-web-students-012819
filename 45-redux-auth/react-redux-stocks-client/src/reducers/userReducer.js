// import types

const initialState = null

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      // return the user
      return action.payload

    case 'SIGNME_UP':
      debugger
      return action.payload
    default:
      return state
  }
}

export default userReducer