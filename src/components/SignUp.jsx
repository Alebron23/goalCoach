import React, { Component } from 'react';
import { Link } from 'react-router'
import { firebaseApp } from '../firebase';

class SignUp extends Component {

  constructor (props){ //Always have to have a constructor when dealing with state because you need to be able to access props.

    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }


  signUp(){

    console.log('this.state', this.state); //You want to console.log the state just make sure you are setting the state from your input fields and button click below.
    const { email, password } = this.state; //es6 shorthand. You are grabbing the state that you set in the input fields downbelow and assigning it to some variables. You do this because you never set state directly.

    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error', error);
        this.setState({error});
      })
  }


  render() {

    return (

      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            style={{margin: '5px'}}
            placeholder="email"
            onChange={event => this.setState({email: event.target.value})}
            />

            <input
              className="form-control"
              type="password"
              style={{margin: '5px'}}
              placeholder="password"
              onChange={event => this.setState({password: event.target.value})}
            />

            <button
              className="btn btn-primary"
              type="button"
              style={{margin: '5px'}}
              onClick={() => this.signUp()}
            >
              Sign Up
            </button>
        </div>

        <div style={{margin: '5px'}}>
          {this.state.error.message}
        </div>

        <div style={{margin: '5px'}}>
          <Link to={'/signin'}> Already have an account? Sign In</Link>
        </div>
      </div>
    )
  }
}

export default SignUp;
