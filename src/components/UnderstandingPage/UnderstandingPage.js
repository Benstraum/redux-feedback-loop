import React, { Component } from 'react'
import { connect } from 'react-redux'

class UnderstandingPage extends Component {
    state = {
        understanding: null,
        bool: false
    }
    onInputChange = (event, input) => {
        this.setState({
            [input]: event.target.value,
            bool:true
        });
    }
    onNextClick = () => {
        if (this.state.bool) {
            this.props.dispatch({
                type: "SET_UNDERSTANDING",
                payload: this.state.understanding
            })
            this.props.history.push("/weAreHereForYou")
        } else {
            alert('pls tell me your understanding in a numeric fashion')
        }
    }
    render() {
        return (
            <div>
                <h1>How are you doing with your course material?</h1>
                <input required type="number" onChange={(event) => this.onInputChange(event, 'understanding')} />

                <button onClick={this.onNextClick}>Next -></button>
            </div>
        )
    }
}
export default connect()(UnderstandingPage);