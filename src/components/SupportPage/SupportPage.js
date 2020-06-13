import React, {Component} from 'react'

class SupportPage extends Component{
    state={
        feeling:''
    }
    onInputChange =(event, input) => {
        this.setState({
            [input]: event.target.value
        });
    }
    onNextClick = () => {
        this.props.history.push("/wantToAddAnything")
    }
    render(){
        return(
            <div>
            <h1>How are you doing with your course material?</h1>
            <input required type="number" onChange={(event)=>this.onInputChange(event, 'support')}/>

            <button onClick={this.onNextClick}>Next -></button>
            </div>
        )
    }
}
export default SupportPage;