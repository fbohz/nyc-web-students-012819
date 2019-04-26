import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import {connect} from 'react-redux'
import { autoLogin } from './actions'
import Navbar from './components/Navbar';
import SignmeUp from './components/SignmeUp'

class App extends Component {
  
  componentDidMount() {
    // dispatch a POJO directly to the store
    // this.props.dispatch(login)
    // if (localStorage.getItem('token')) {
    //   // login
    //   this.props.autoLogin()
    //   // fetch('/auto_login')
    //   //   .then(user => {
    //   //     this.props.whatever()
    //   //   })
    // }
  }


  // OPTION 2
  // componentDidMount() {
    // trigger function that is connected and invoked with dispatch(login)
  //   this.props.login()
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        <Header/>
        {/* <Navbar /> */}

        <SignmeUp />
        <MainContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // the global state
  console.log('STATE IN APP:', state)
  return {
    state
  }
}

// OPTION 1 
export default connect(mapStateToProps, { autoLogin })(App)


// OPTION 2
// const mapDispatchToProps = dispatch => {
//   return {
//     login: () => dispatch(login)
//   }
// }
// OPTION 2
// export default connect(mapStateToProps, mapDispatchToProps)(App)
