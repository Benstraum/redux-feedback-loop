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
    state = {
        feeling: '',
        understanding: '',
        support: '',
        comment: '',
        editFeel: true,
        editUnderstanding: true,
        editSupport: true,
        editComment: true

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
        this.props.hideReviewPage();
    }
    onInputChange = (event, input) => {
        this.setState({
            [input]: event.target.value
        });
    }
    editButtonHandle = (buttontype, stateInfo, stateKey) => {
        this.props.dispatch({
            type: buttontype,
            payload: stateInfo
        })

        this.setState({
            editFeel: true,
            editUnderstanding: true,
            editSupport: true,
            editComment: true
        })
        console.log(this.props.feedback)
        console.log(this.state)
    }
    toggleBool = (stateKey, bool) => {
        this.setState({
            ...this.state,
            [stateKey]: bool
        })
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
                            {this.state.editFeel ?
                                <li>Feelings: {feeling}<Button variant="outlined" color="primary" onClick={() => this.toggleBool('editFeel', false)}>edit</Button></li>
                                :
                                <li> <Textfield  id="outlined-basic" label={"change answer"} type="number" onChange={(event) => this.onInputChange(event, 'feeling', 'editFeel')} />
                                    <Button variant="outlined" color="secondary" onClick={() => this.editButtonHandle('SET_FEELING', this.state.feeling)}>submit change</Button>
                                </li>}
                            {this.state.editUnderstanding ?
                                <li>Understanding: {understanding}<Button variant="outlined" color="primary" onClick={() => this.toggleBool('editUnderstanding', false)}>edit</Button></li>
                                :
                                <li>  <Textfield min='0' max='10' id="outlined-basic" label="change answer" type="number" onChange={(event) => this.onInputChange(event, 'understanding', 'editUnderstanding')} />
                                    <Button variant="outlined" color="secondary" onClick={() => this.editButtonHandle('SET_UNDERSTANDING', this.state.understanding)}>submit change</Button>
                                </li>}
                            {this.state.editSupport ?
                                <li>Support: {support}<Button variant="outlined" color="primary" onClick={() => this.toggleBool('editSupport', false)}>edit</Button></li>
                                :
                                <li> <Textfield  id="outlined-basic" label="change answer" type="number" onChange={(event) => this.onInputChange(event, 'support', 'editSupport')} />
                                    <Button variant="outlined" color="secondary" onClick={() => this.editButtonHandle('SET_SUPPORT', this.state.support)}>submit change</Button >
                                </li>}
                            {this.state.editComment ?
                                <li>Comments: {this.props.feedback.comment}<Button variant="outlined" color="primary" onClick={() => this.toggleBool('editComment', false)}>edit</Button></li>
                                :
                                <li> <Textfield id="outlined-basic" label="change answer" type="text" onChange={(event) => this.onInputChange(event, 'comment', 'editComment')} />
                                    <Button variant="outlined" color="secondary" onClick={() => this.editButtonHandle('SET_COMMENT', this.state.comment)}>submit change</Button>
                                </li>}
                        </ul>
                        <br></br>
                        {feeling === '' || understanding === '' || support === '' ?
                            <Button disabled variant="outlined" color="secondary">Submit Response</Button>
                            :
                            <Button variant="outlined" color="primary" onClick={this.finishForm}>Submit Response</Button>}
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
