import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import './ReviewPage.css'
//style
import Paper from '@material-ui/core/Paper';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
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
            ...this.state,
            editFeel: true,
            editUnderstanding: true,
            editSupport: true,
            editComment: true
        })
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
                                 <li>   <InputLabel id="demo-simple-select-label">Feelings</InputLabel>
                                 <Select labelId="demo-simple-select-label" id="demo-simple-select" value={this.state.feeling} onChange={(event) => this.onInputChange(event, 'feeling', 'editFeel')}>
                                     <MenuItem value={1}>Very Bad</MenuItem>
                                     <MenuItem value={2}>Bad</MenuItem>
                                     <MenuItem value={3}>Ok</MenuItem>
                                     <MenuItem value={4}>Good</MenuItem>
                                     <MenuItem value={5}>Very Good</MenuItem>
                                 </Select>
                                {/* <Textfield  id="outlined-basic" label={"change answer"} type="number" onChange={(event) => this.onInputChange(event, 'feeling', 'editFeel')} /> */}
                                    <Button variant="outlined" color="secondary" onClick={() => this.editButtonHandle('SET_FEELING', this.state.feeling)}>submit change</Button>
                                </li>}
                            {this.state.editUnderstanding ?
                                <li>Understanding: {understanding}<Button variant="outlined" color="primary" onClick={() => this.toggleBool('editUnderstanding', false)}>edit</Button></li>
                                :
                                <li> <InputLabel id="demo-simple-select-label">Understanding</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={this.state.understanding} onChange={(event) => this.onInputChange(event, 'understanding', 'editUnderstanding')}>
                                    <MenuItem value={1}>Very Bad</MenuItem>
                                    <MenuItem value={2}>Bad</MenuItem>
                                    <MenuItem value={3}>Ok</MenuItem>
                                    <MenuItem value={4}>Good</MenuItem>
                                    <MenuItem value={5}>Very Good</MenuItem>
                                </Select>
                                     {/* <Textfield min='0' max='10' id="outlined-basic" label="change answer" type="number" onChange={(event) => this.onInputChange(event, 'understanding', 'editUnderstanding')} /> */}
                                    <Button variant="outlined" color="secondary" onClick={() => this.editButtonHandle('SET_UNDERSTANDING', this.state.understanding)}>submit change</Button>
                                </li>}
                            {this.state.editSupport ?
                                <li>Support: {support}<Button variant="outlined" color="primary" onClick={() => this.toggleBool('editSupport', false)}>edit</Button></li>
                                :
                                <li> <InputLabel id="demo-simple-select-label">Support</InputLabel>
                                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={this.state.support} onChange={(event) => this.onInputChange(event, 'support', 'editSupport')}>
                                    <MenuItem value={1}>Very Bad</MenuItem>
                                    <MenuItem value={2}>Bad</MenuItem>
                                    <MenuItem value={3}>Ok</MenuItem>
                                    <MenuItem value={4}>Good</MenuItem>
                                    <MenuItem value={5}>Very Good</MenuItem>
                                </Select>
                                    {/* <Textfield  id="outlined-basic" label="change answer" type="number" onChange={(event) => this.onInputChange(event, 'support', 'editSupport')} /> */}
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
