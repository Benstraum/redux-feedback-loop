import React, { Component } from 'react'
import { connect } from 'react-redux'
//style
import Paper from '@material-ui/core/Paper';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
class SupportPage extends Component {
    state = {
        support: '',
        bool: false
    }
    onInputChange = (event, input) => {
        this.setState({
            [input]: event.target.value,
            bool: true
        });
    }
    onNextClick = () => {
        if (this.state.bool) {
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
                        <h1>Are you feeling supported?</h1>
                        <Textfield id="standard-basic" label="1-10" type="number" onChange={(event) => this.onInputChange(event, 'support')} />
                        <Button variant="outlined" color="primary" onClick={this.onNextClick}>Next -></Button>
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