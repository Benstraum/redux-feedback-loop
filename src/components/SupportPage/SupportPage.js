import React, { Component } from 'react'
import { connect } from 'react-redux'

class SupportPage extends Component {
    state = {
        support: null,
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
                type: "SET_SUPPORT",
                payload: this.state.support
            })
            this.props.history.push("/wantToAddAnything")
        } else {
            alert('pls tell me your feelings of support in a numeric value')
        }
    }
    render() {
        return (
            <div>
                <h1>Are you feeling supported?</h1>
                <input required type="number" onChange={(event) => this.onInputChange(event, 'support')} />

                <button onClick={this.onNextClick}>Next -></button>
            </div>
        )
    }
}
export default connect()(SupportPage);