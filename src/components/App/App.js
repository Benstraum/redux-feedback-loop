//important modules
import React, { Component } from 'react';


//routing
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
//pages
import HomePage from '../HomePage/HomePage'
import FeelingPage from '../FeelingPage/FeelingPage'
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage'
import SupportPage from '../SupportPage/SupportPage'
import CommentPage from '../CommentPage/CommentPage'
import ReviewPage from '../ReviewPage/ReviewPage'
import AdminPage from '../AdminPage/AdminPage';
import FinishPage from '../FinishPage/FinishPage'

//styles
import './App.css';

//mat ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


class App extends Component {
  state = {
    reduxInteracted: true,
    review: false
  }
  //this literally is only called to update the apps page when a button is clicked on another route 
  iNeedInfo = () => {
    this.setState({
      reduxInteracted: !this.state.reduxInteracted
    })
  }
  reviewPage = () => {
    this.setState({
      review: true
    })
  }
  hideReviewPage = () => {
    this.setState({
      review: false
    })
  }
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          {console.log('Welcome to the feedback page!')}
        </header>
        <Router>
          <AppBar position="static">
            <Toolbar>
            </Toolbar>
          </AppBar>
          <div className="navBar">
            <ol className="nav">
              {/* here is the start to conditionally rendering navbar*/}
              <li >
                <Link to="/">Home</Link>
              </li>
              {this.props.feedback.feeling &&
                <li >
                  <Link to="/howAreWeFeeling">Feelings?</Link>
                </li>}
              {this.props.feedback.understanding &&
                <li>
                  <Link to="/howIsYourCourseWork">Understanding</Link>
                </li>}
              {this.props.feedback.support &&
                <li >
                  <Link to="/weAreHereForYou">Support</Link>
                </li>}
              {this.props.feedback.support &&
                <li >
                  <Link to="/wantToAddAnything">Comments</Link>
                </li>}
              {this.state.review &&
                <li>
                  <Link to="/Review">Review</Link>
                </li>}
            </ol>
          </div>
          {/* Routes for each component which passes necessary functions */}
          <Route exact path="/" component={HomePage} />
          <Route path="/howAreWeFeeling" component={(props) => <FeelingPage {...props} iNeedInfo={this.iNeedInfo} />} />
          <Route path="/howIsYourCourseWork" component={(props) => <UnderstandingPage {...props} iNeedInfo={this.iNeedInfo} />} />
          <Route path="/weAreHereForYou" component={(props) => <SupportPage {...props} iNeedInfo={this.iNeedInfo} />} />
          <Route path="/wantToAddAnything" component={(props) => <CommentPage {...props} reviewPage={this.reviewPage} iNeedInfo={this.iNeedInfo} />} />
          <Route path="/Review" component={(props) => <ReviewPage {...props} hideReviewPage={this.hideReviewPage} />} />
          <Route path="/Finish" component={FinishPage} />
          <Route path="/Admin" component={AdminPage} />
        </Router>
      </div>
    );
  }
}
const putReduxStateOnProps = (reduxState) => {
  return {
    feedback: reduxState.feedbackReducer
  }
}
export default connect(putReduxStateOnProps)(App);