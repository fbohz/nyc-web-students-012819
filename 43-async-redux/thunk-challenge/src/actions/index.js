URL = "https://randomuser.me/api/"

// CHALLENGE:

// install the thunk package

// add thunk middleware

// inititally dispatch the 'ASYNC_START' function
// make a fetch request
// when you receive a response
// dispatch "FETCH_PROFILE" with the correct user data
export function fetchProfile() {
  return dispatch => {
    dispatch({ type: 'ASYNC_START' })

    setTimeout(() => {
      fetch(URL)
      .then(r => r.json())
      .then(data => {
        const user = data.results[0]
        console.log(user);
        const firstName = user.name.first
        const picture = user.picture.large
        dispatch({type: 'FETCH_PROFILE', user: {firstName, picture}})
      })
    }, 1000)

  }
}
