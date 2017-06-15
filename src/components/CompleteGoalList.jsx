import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {

  componentDidMount() { //to render our goals we used a componentdidmount lifecycle hook.
    completeGoalRef.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({email, title})
      })
      //console.log('completeGoals', completeGoals);  //Now we have to get these completed arrays available in props
      this.props.setCompleted(completeGoals);
    })
  }


  clearCompleted() {
    completeGoalRef.set([]); //pass in an empty array so everthing in the database is wiped out to simply an array. 
  }


  render() {

    console.log('this.props.completeGoals', this.props.completeGoals);

    return (
      <div>
        {
          this.props.completeGoals.map((completeGoal, index) => {
            const { title, email } = completeGoal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email} </em>
              </div>
            )
          })
        }

        <button
          className="btn btn-primary"
          style={{marginTop:'5px'}}
          onClick={() => this.clearCompleted()}
        >
          Clear All
        </button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  }
}


export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);
