import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import './ReviewPage.css'
//style
import Paper from '@material-ui/core/Paper';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
class ReviewPage extends Component {
    finishForm = () => {
        axios({
            method: "POST",
            url: 'feedback',
            data: this.props.feedback
        })
            .then((response) => {
                console.log('post is gucci');
                this.props.dispatch({
                    type: "RESET"
                })
                this.props.history.push('/Finish');
            })
            .catch(err => console.log('this is err in post', err))
        //then inser some modal thing
    }
    render() {
        let feeling = this.props.feedback.feeling,
            understanding = this.props.feedback.understanding,
            support = this.props.feedback.support
        return (<Paper elevation={5} >
            <div className="paper">
                <Grid container justify="center" spacing={2}>
                    <h1>Double check your feedback please :)</h1>
                    <div className='reviewlist'>
                    <ul>
                        <li>Feelings: {feeling} <button onClick={() => this.props.history.push('/howAreWeFeeling')}>Edit</button></li>
                        <li>Understanding: {understanding} <button onClick={() => this.props.history.push('/howIsYourCourseWork')}>Edit</button></li>
                        <li>Support: {support} <button onClick={() => this.props.history.push('/weAreHereForYou')}>Edit</button ></li>
                        <li>Comments: {this.props.feedback.comment} <button onClick={() => this.props.history.push('/wantToAddAnything')}>Edit</button></li>
                    </ul>
                    {feeling === '' || understanding === '' || support === '' ? <> <p>You actually have to fill out the form </p><Button disabled variant="outlined" color="secondary" onClick={this.finishForm}>Submit Response</Button> </> : <Button variant="outlined" color="primary" onClick={this.finishForm}>Submit Response</Button>}
                    </div>
                </Grid>
            </div>
        </Paper>
        )
    }
}
const putReduxStateOnProps = (reduxState) => {
    return {
        feedback: reduxState.feedbackReducer
    }
}
export default connect(putReduxStateOnProps)(ReviewPage);
