import React, { Component } from 'react'


import Button from '@material-ui/core/Button';



class HomePage extends Component {

    onNextClick = () => {
        this.props.history.push("/howAreWeFeeling")
    }
    render() {

        return (
            <div className='homeButton'>
                <h4>For this survey please write a number between 1 and 10 to accurately represent your response
                    1 being bad and 10 being good
                </h4>
                <Button variant="contained" color="primary" onClick={this.onNextClick}>Start your Feedback!</Button>
            </div>
        )
    }
}
export default HomePage;