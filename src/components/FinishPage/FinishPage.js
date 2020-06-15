import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class FinishPage extends Component {

    onNextClick = () => {
        this.props.history.push("/howAreWeFeeling")
    }
    render() {
        return (
            <Paper elevation={5} >
                <div className="paper">
                    <h1>Thank you for your input!</h1>
                    <Button variant="contained" color="secondary" onClick={() => this.props.history.push('/')} >Give more feedback?</Button>
                </div>
            </Paper>

        )
    }
}
export default FinishPage;