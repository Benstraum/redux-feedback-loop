import React, { Component } from 'react'
import { connect } from 'react-redux'
//style
import Paper from '@material-ui/core/Paper';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
class FeelingPage extends Component {
    state = {
        feeling: null,
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
                type: "SET_FEELING",
                payload: this.state.feeling
            })
            this.props.iNeedInfo()
            this.props.history.push("/howIsYourCourseWork")
        } else {
            alert('pls tell me your feelings in a numeric value')
        }
    }
    render() {

        return (
            <Paper elevation={5} >
                <div className="paper">
                    <Grid container justify="center" spacing={2}>
                        <h1>How are you feeling today?</h1>
                        <Textfield  id="standard-basic" label="1-10" type="number" onChange={(event) => this.onInputChange(event, 'feeling')} />
                        <Button variant="outlined" color="primary" onClick={this.onNextClick}>Next -></Button>
                    </Grid>
                </div>
            </Paper>
        )
    }
}
export default connect()(FeelingPage);