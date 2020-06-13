import React, { Component } from 'react'
import { connect } from 'react-redux'
//style
import Paper from '@material-ui/core/Paper';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
class UnderstandingPage extends Component {
    state = {
        understanding: '',
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
                type: "SET_UNDERSTANDING",
                payload: this.state.understanding
            })
            this.props.iNeedInfo()
            this.props.history.push("/weAreHereForYou")
        } else {
            alert('pls tell me your understanding in a numeric fashion')
        }
    }
    render() {
        return (
            <Paper elevation={5} >
                <div className="paper">
                    <Grid container justify="center" spacing={2}>
                        <h1>How are you doing with your course material?</h1>
                        <Textfield id="standard-basic" label="1-10" type="number" onChange={(event) => this.onInputChange(event, 'understanding')} />
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
export default connect(putReduxStateOnProps)(UnderstandingPage);