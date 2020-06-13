import React, {Component} from 'react'

class UnderstandingPage extends Component{
    state={
        feeling:''
    }
    onInputChange =(event, input) => {
        this.setState({
            [input]: event.target.value
        });
    }
    onNextClick = () => {
        this.props.history.push("/weAreHereForYou")
    }
    render(){
        return(
            <div>
            <h1>How are you doing with your course material?</h1>
            <input required type="number" onChange={(event)=>this.onInputChange(event, 'understandinga')}/>

            <button onClick={this.onNextClick}>Next -></button>
            </div>
        )
    }
}
export default UnderstandingPage;