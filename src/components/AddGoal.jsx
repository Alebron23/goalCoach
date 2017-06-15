import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {

  constructor(props) {

    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal() {
    console.log('this', this);
    const { title } = this.state;
    const { email } = this.props.user; //have access to this.props from redux.
    goalRef.push({email, title}); //we can push any element we want and it will automatically update in our database.
  }


  render() {

    return (
      <div className="form-inline">
        <div className="form-group">
          <input
            type="text"

            placeholder="Add a goal"
            className="form-control"
            style={{marginRight: '5px'}}
            onChange={event => this.setState({title: event.target.value})}
          />

          <button
            className="btn btn-success"
            style={{marginTop: '5px'}}
            type="button"
            onClick={() => this.addGoal()}
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  const { user } = state;
  //console.log('state in AddGaol.jsx', state);
  return {
    user
  }
}


export default connect(mapStateToProps, null)(AddGoal); //Dont have any action creators so null is our second argument.
