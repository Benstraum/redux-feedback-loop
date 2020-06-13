import React, { Component } from 'react'
import { connect } from 'react-redux'
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
            this.props.history.push("/howIsYourCourseWork")
        } else {
            alert('pls tell me your feelings in a numeric value ')
        }
    }
    render() {

        return (<div>
            <h1>How are you feeling today?</h1>
            <input required type="number" onChange={(event) => this.onInputChange(event, 'feeling')} />

            <button onClick={this.onNextClick}>Next -></button>
        </div>
        )
    }
}
export default connect()(FeelingPage);