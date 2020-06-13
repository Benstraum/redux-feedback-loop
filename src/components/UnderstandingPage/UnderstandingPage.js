import React, {Component} from 'react'
import { connect } from 'react-redux'

class UnderstandingPage extends Component{
    state={
        understanding:null
    }
    onInputChange =(event, input) => {
        this.setState({
            [input]: event.target.value
        });
    }
    onNextClick = () => {
        this.props.dispatch({
            type:"SET_UNDERSTANDING",
            payload:this.state.understanding
        })
        this.props.history.push("/weAreHereForYou") 
    }
    render(){
        return(
            <div>
            <h1>How are you doing with your course material?</h1>
            <input required type="number" onChange={(event)=>this.onInputChange(event, 'understanding')}/>

            <button onClick={this.onNextClick}>Next -></button>
            </div>
        )
    }
}
export default connect()(UnderstandingPage);