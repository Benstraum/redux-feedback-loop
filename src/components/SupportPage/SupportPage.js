import React, { Component } from 'react'
import { connect } from 'react-redux'
//style
import Paper from '@material-ui/core/Paper';
// import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
class SupportPage extends Component {
    state = {
        support: '',

    }
    onInputChange = (event, input) => {
        this.setState({
            [input]: event.target.value,
 
        });
    }
    onNextClick = () => {
        if (this.state.support) {
            this.props.dispatch({
                type: "SET_SUPPORT",
                payload: this.state.support
            })
            this.props.iNeedInfo()
            this.props.history.push("/wantToAddAnything")
        } else {
            alert('pls tell me your feelings of support in a numeric value')
        }
    }
    render() {
        return (
            <Paper elevation={5} >
                <div className="paper">
                    <Grid container justify="center" spacing={2}>
                        <h1>How are we doing with supporting you?</h1>
                        <div className='selectResponse'>
                            <InputLabel id="demo-simple-select-label">Support System</InputLabel>
                            <Select labelId="demo-simple-select-label" 
                            id="demo-simple-select" 
                            value={this.state.support} 
                            onChange={(event) => this.onInputChange(event, 'support')}>
                                <MenuItem value={1}>Very Bad</MenuItem>
                                <MenuItem value={2}>Bad</MenuItem>
                                <MenuItem value={3}>Ok</MenuItem>
                                <MenuItem value={4}>Good</MenuItem>
                                <MenuItem value={5}>Very Good</MenuItem>
                            </Select>

                            {/* <Textfield id="standard-basic" label="1-10" type="number" onChange={(event) => 
                                this.onInputChange(event, 'support')} /> */}
                            <Button variant="outlined" color="primary" onClick={this.onNextClick}>Next -></Button>
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
export default connect(putReduxStateOnProps)(SupportPage);