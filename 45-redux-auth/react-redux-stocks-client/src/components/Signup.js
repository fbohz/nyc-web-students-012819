import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { login } from '../actions'
import { connect } from 'react-redux' 

class Signup extends Component {
  state = {
    username: '',
    password: '',
    balance: 5000
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    this.setState({
      username: '',
      password: ''
    })
    fetch('http://localhost:4000/api/v1/users', {
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state
      })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token)
        this.props.dispatch(login)
      })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        Signup
        <Form.Group>
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
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default connect()(Signup)