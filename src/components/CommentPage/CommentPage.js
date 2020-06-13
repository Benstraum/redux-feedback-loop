import React, { Component } from 'react'
import { connect } from 'react-redux'
//style
import Paper from '@material-ui/core/Paper';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
class CommentPage extends Component {
    state = {
        comment: ''
    }
    onInputChange = (event, input) => {
        this.setState({
            [input]: event.target.value
        });
    }
    onNextClick = () => {
        this.props.dispatch({
            type: "SET_COMMENT",
            payload: this.state.comment
        })
        this.props.history.push("/Review")
    }
    render() {
        return (
            <Paper elevation={5} >
                <div className="paper">
                <Grid container justify="center" spacing={2}>
                    <h1>Any other comments/concerns?</h1>
                    <div className="comments">
                    <Textfield id="standard-multiline-flexible" multiline rowsMax={4} label="Optional comments!" onChange={(event) => this.onInputChange(event, 'comment')} />
                    <Button variant="outlined" color="primary" onClick={this.onNextClick}>Finish and Review-></Button>
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
export default connect(putReduxStateOnProps)(CommentPage);