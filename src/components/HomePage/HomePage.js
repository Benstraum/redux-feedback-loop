import React, { Component } from 'react'


import Button from '@material-ui/core/Button';



class HomePage extends Component {

    onNextClick = () => {
        this.props.history.push("/howAreWeFeeling")
    }
    render() {

        return (
            <div className='homeButton'>
                <Button variant="contained" color="primary" onClick={this.onNextClick}>Start your Feedback!</Button>
            </div>
        )
    }
}
export default HomePage;