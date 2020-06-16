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
class UnderstandingPage extends Component {
    state = {
        understanding: '',

    }
    onInputChange = (event, input) => {
        this.setState({
            [input]: event.target.value,
        });
    }
    onNextClick = () => {
        if (this.state.understanding) {
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
                        <div className='selectResponse'>
                            <InputLabel id="demo-simple-select-label">Understanding Material</InputLabel>
                            <Select labelId="demo-simple-select-label" 
                            id="demo-simple-select" 
                            value={this.state.understanding} 
                            onChange={(event) => this.onInputChange(event, 'understanding')}>
                                <MenuItem value={1}>Very Bad</MenuItem>
                                <MenuItem value={2}>Bad</MenuItem>
                                <MenuItem value={3}>Ok</MenuItem>
                                <MenuItem value={4}>Good</MenuItem>
                                <MenuItem value={5}>Very Good</MenuItem>
                            </Select>
                            {/* <Textfield id="standard-basic" label="1-10" type="number" onChange={(event) => 
                                this.onInputChange(event, 'understanding')} /> */}
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
export default connect(putReduxStateOnProps)(UnderstandingPage);