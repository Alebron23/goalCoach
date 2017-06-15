import React, { Component } from 'react';
import { connect } from 'react-redux';        //get the email by connecting to the redux-store and get the global state.
import { completeGoalRef, goalRef } from '../firebase'; // We want the title of our goal and the email of the user that is logged in that completed the goal.

class GoalItem extends Component {

  completeGoal() {
    //add to complete goals in database. So have to export a new ref in the firebase file.
    //remove this goal from the goals reference.

    const { email } = this.props.user;
    const { title, serverKey } = this.props.goal;
    console.log('serverKey', serverKey);
    goalRef.child(serverKey).remove();    //removes the element that was completed from the database. 
    completeGoalRef.push({email, title}); //we need to get the the key of the goal so we can remove it from the list, so we have to add it to the state whenever we create a new goal.
  }


  render() {

    console.log('this.props.goal', this.props.goal);
    const { email, title } = this.props.goal;

    return (
      <div style={{margin: '5px'}}>
        <strong> {title}</strong>
        <span style={{marginRight: '5px'}}> Submitted by <em> {email} </em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => this.completeGoal()}
        >
          Complete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {

  const { user } = state;

  return {
    user
  }
}

export default connect(mapStateToProps, null)(GoalItem); //Not binding any actions so we passed null as the second argument.
