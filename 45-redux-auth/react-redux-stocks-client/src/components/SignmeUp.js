import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react';
import {signmeUp} from '../actions'
import {connect} from 'react-redux'

class SignmeUp extends Component {
  state = {
    username: '',
    password: '',
    balance: 5000
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  // post /api/v1/users
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.signmeUp(this.state)
    
    this.setState({
      user: '',
      password: ''
    })
    
  }

  render() {
    console.log(this.props)
    return (
      <div>
        HEY YOU SHOULD SIGN UP
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="username"
            name="username"
            placeholder="username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <Form.Input
            label="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <Button type="submit">SUBMIT </Button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signmeUp: (user) => dispatch(signmeUp(user))
  }
}

//  { signmeUp: () => dispatch(signmeUp) }

export default connect(null, mapDispatchToProps)(SignmeUp)