//important modules
import React, { Component } from 'react';
import axios from 'axios';

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
            <Router>
        <ol className="nav">
          
              <li className="navLi">
                <Link to="/">Home</Link>
              </li>
              <li className="navLi">
                <Link to="/howAreWeFeeling">Feelings?</Link>
              </li>
              <li className="navLi">
                <Link to="/howIsYourCourseWork">Course Material</Link>
              </li>
              <li >
                <Link to="/weAreHereForYou">Support</Link>
              </li>
              <li className="navLi">
                <Link to="/wantToAddAnything">Additional Comments</Link>
              </li>
              <li >
                <Link to="/Review">Review</Link>
              </li>
              <li >
                <Link to="/Admin">Admin REMOVE LATER</Link>
              </li>
            </ol>
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
