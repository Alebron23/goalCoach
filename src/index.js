import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';  //Router it takes pathes that we set as strings and maps them to components that we pass as props. So we've created three components that we can map as routes to our application. browserHistory doesn't work the same in verson 4 so have to go to package.json and type 3.0.1, delete node_modules, npm install again, and relaunch the server.
import { firebaseApp } from './firebase';
import { logUser } from './actions'
import reducer from './reducers';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const store = createStore(reducer);             //have to create this and a reducers for Provider to work.

firebaseApp.auth().onAuthStateChanged(user => { //We add as listener that tells us whether or not our users are authenticted or not. The listener .onAuthStateChanged returns a promise that we able to handle by referencing the user variable. //To handle redirecting we can take advantage of the browswer history component which allows us to push routes onto the navigation of this application.

  if(user) {
    
    const { email } = user;                     //firebase gives us the user object. Have to hook up mapstatetoprops to see if we have a user in our redux application.
    store.dispatch(logUser(email));
    browserHistory.push('/app');                //navigates automatically to our app page. This saves info on the browser similar to cookies so it will remember if you are logged in and redirect you straight to the page without having to be logged in. So onAuthStateChanged returns a valid user becuase it remembers that you are already logged in.
  } else {
    
    browserHistory.replace('/signin');          //So if the user ever unauthenticates, you will just redirect to signin.
  }
})

ReactDOM.render(                                //This router tag just sits at the host a path of /. The router doesn't have a component but has special key called history and the argument is something that we imported.

                                                //browserHistory and history in our Router allows us to navigate to different routes that we specify and different components with methods like push pop and replace. The push method adds navigation to the compoent from one route to the next and adds that navigation to the history.
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  </Provider>, document.getElementById('root')

)


