import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { login } from '../actions'
import { connect } from 'react-redux' 

class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = () => {
    this.setState({
      username: '',
      password: ''
    })
    fetch('http://localhost:4000/api/v1/login', {
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
        if (data.errors) {
          alert(data.errors)
        } else {
          localStorage.setItem('token', data.token)
          this.props.login(data.user)
          console.log(data)
        }
      })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        Login
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

export default connect(null, {login})(Login)