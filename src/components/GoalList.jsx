import React, { Component } from 'react';
import { connect } from 'react-redux';            //connecting this component to the redux store.
import { goalRef } from '../firebase';            //goalRef is the database from firebase that we are referencing and we push it to the database in the AddGoal component.
import { setGoals } from '../actions'             // We are taking advantage of the action creator that we defined earlier called set goals becuase now that we have these goals we would like to be able to access them within props.
import GoalItem from './GoalItem';



class GoalList extends Component {

  componentDidMount(){

    goalRef.on('value', snap => {                 //This listener happens in real time. So if you update the database, it will also update the info here.

      let goals = [];

      snap.forEach(goal => {

        const { email, title } = goal.val();      //Gets the value from the database in firebase.
        const serverKey = goal.key;
        goals.push({ email, title, serverKey });
        console.log('goal', goal);
      })

      //console.log('goals', goals);                //Really only interested in the email and the title for now. We have to add the goals to our props so we can access them in other components and we use redux for this. We'll have an action creator that sets the goals globally in our store.
      this.props.setGoals(goals);
    })                                            //You can listen to multiple events from the on funciton such as a child added event, child removed event. We Trigger a promise whenever things happen within our listener. We use the value event to trigger our promise whenever something happens within our goal reference.
  }


  render() {                                       //After the GoalList component renders we'll attach a listener to our goalRef from firebase that grabs all the goals.

    console.log('this.props.goals', this.props.goals)
    return (
      <div>
        {
          this.props.goals.map((goal, index) => {
            return (

              <GoalItem key={index} goal={goal} />//These divs need styling so we are going to create a whole goal item component so like
            )
          })
        }
      </div>
    )
  }
}


function mapStateToProps(state) { //To see if setGoals function actually worked.
  const { goals } = state;
  return {
    goals
  }
}


export default connect(mapStateToProps, { setGoals })(GoalList);                            //Have to import this file within App.jsx
