import React, { Component } from 'react'
import Signup from './Signup';
import Login from './Login';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react';

class Navbar extends Component {
  render() {
    return (
      <div>
        {
          this.props.user
            ? <div style={{textAlign: 'center', fontSize: '24px', margin: '25px 0px'}} >
                Welcome {this.props.user.username}, your balance is ${this.props.user.balance}
                {/* <Button style={{marginLeft: '25px'}}>
                  Logout
                </Button> */}
              </div>
            : <>
                <Signup />
                <Login />
              </>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Navbar)