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
    state={
        feeling:'',
        understanding:'',
        support:'',
        comment:''
    }
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
    onInputChange = (event, input) => {
        this.setState({
            [input]: event.target.value
        });
    }
    editButtonHandle = (buttontype, stateInfo) => {
        this.props.dispatch({
            type:buttontype,
            payload: stateInfo
        })
        this.setState({
            feeling:'',
            understanding:'',
            support:'',
            comment:''
        })
console.log(this.props.feedback)
    }
    render() {
        let feeling = this.props.feedback.feeling,
            understanding = this.props.feedback.understanding,
            support = this.props.feedback.support
        return (<Paper elevation={5} >
            <div className="paper">
                <Grid container direction="row" alignItems="center" justify="center" spacing={2}>
                    <h1>Double check your feedback please :)</h1>
                    <div className='reviewlist'>
                        <ul>
                            <li>Feelings: {feeling}</li>
                            <li> <Textfield id="outlined-basic" label={"change answer"} type="number" onChange={(event) => this.onInputChange(event, 'feeling')} />
                                <Button variant="outlined" color="secondary" onClick={() =>this.editButtonHandle('SET_FEELING', this.state.feeling)}>Edit</Button>
                            </li>
                            <li>Understanding: {understanding}</li>
                            <li>  <Textfield id="outlined-basic" label="change answer" type="number" onChange={(event) => this.onInputChange(event, 'understanding')} />
                                <Button variant="outlined" color="secondary" onClick={() =>this.editButtonHandle('SET_UNDERSTANDING', this.state.understanding)}>Edit</Button>
                            </li>
                            <li>Support: {support}</li>
                            <li> <Textfield id="outlined-basic" label="change answer" type="number" onChange={(event) => this.onInputChange(event, 'support')} />
                                <Button variant="outlined" color="secondary" onClick={() =>this.editButtonHandle('SET_SUPPORT', this.state.support)}>Edit</Button >
                            </li>
                            <li>Comments: {this.props.feedback.comment}</li>
                            <li> <Textfield id="outlined-basic" label="change answer" type="text" onChange={(event) => this.onInputChange(event, 'comment')} />
                                <Button variant="outlined" color="secondary" onClick={() => this.editButtonHandle('SET_COMMENT', this.state.comment)}>Edit</Button>
                            </li>
                        </ul>
                        {feeling === '' || understanding === '' || support === '' ? <Button disabled variant="outlined" color="secondary">Submit Response</Button> : <Button variant="outlined" color="primary" onClick={this.finishForm}>Submit Response</Button>}
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
