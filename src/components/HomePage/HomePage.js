import React, { Component } from 'react'


import Button from '@material-ui/core/Button';



class HomePage extends Component {

    onNextClick = () => {
        this.props.history.push("/howAreWeFeeling")
    }
    render() {

        return (
            <div className='homeButton'>
                <h4>For this survey please choose a response in our dropdown selector that most accurately represents your feelings to the question.
                    There will be the opportunity for additional comments as well if there's something you would like to communicate to us!
                </h4>
                <Button variant="contained" color="primary" onClick={this.onNextClick}>Start your Feedback!</Button>
            </div>
        )
    }
}
export default HomePage;