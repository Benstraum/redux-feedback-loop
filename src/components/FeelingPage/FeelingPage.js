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
class FeelingPage extends Component {
    state = {
        feeling: '',
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
                    <Grid container justify="center" spacing={4}>
                        <h1>How are you feeling today?</h1>
                        <div className='selectResponse'>
                            <InputLabel id="demo-simple-select-label">Your Feelings</InputLabel>
                            <Select labelId="demo-simple-select-label" 
                            id="demo-simple-select" value={this.state.feeling} 
                            onChange={(event) => this.onInputChange(event, 'feeling')}>
                                <MenuItem value={1}>Very Bad</MenuItem>
                                <MenuItem value={2}>Bad</MenuItem>
                                <MenuItem value={3}>Ok</MenuItem>
                                <MenuItem value={4}>Good</MenuItem>
                                <MenuItem value={5}>Very Good</MenuItem>
                            </Select>
                            {/* <Textfield  id="standard-basic" label="1-10" type="number" onChange={(event) => this.onInputChange(event, 'feeling')} /> */}
                            <Button variant="outlined" 
                            color="primary" 
                            onClick={this.onNextClick}>Next -></Button>
                        </div>
                    </Grid>
                </div>
            </Paper>
        )
    }
}
export default connect()(FeelingPage);