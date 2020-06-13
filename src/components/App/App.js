//important modules
import React, { Component } from 'react';


//routing
import { HashRouter as Router, Route, Link } from 'react-router-dom';

//pages
import HomePage from '../HomePage/HomePage'
import FeelingPage from '../FeelingPage/FeelingPage'
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage'
import SupportPage from '../SupportPage/SupportPage'
import CommentPage from '../CommentPage/CommentPage'
import ReviewPage from '../ReviewPage/ReviewPage'
import AdminPage from '../AdminPage/AdminPage';

//styles
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
            <Router>
              
        {/* commented out for base functionality
         <ol className="nav">
              <li >
                <Link to="/">Home</Link>
              </li>
              <li >
                <Link to="/howAreWeFeeling">Feelings?</Link>
              </li>
              <li >
                <Link to="/howIsYourCourseWork">Course Material</Link>
              </li>
              <li >
                <Link to="/weAreHereForYou">Support</Link>
              </li>
              <li >
                <Link to="/wantToAddAnything">Additional Comments</Link>
              </li>
              <li >
                <Link to="/Review">Review</Link>
              </li>
            </ol> */}
        {/* will need to add more routes for each new component */}
        <Route exact path="/" component={HomePage}/>
        <Route  path="/howAreWeFeeling" component={FeelingPage}/>
        <Route  path="/howIsYourCourseWork" component={UnderstandingPage}/>
        <Route  path="/weAreHereForYou" component={SupportPage}/>
        <Route  path="/wantToAddAnything" component={CommentPage}/>
        <Route path="/Review" component={ReviewPage}/>
        <Route path="/Admin" component={AdminPage} />
        </Router>
      </div>
    );
  }
}

export default App;
