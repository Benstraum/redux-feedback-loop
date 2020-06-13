import React, {Component} from 'react'

class FeelingPage extends Component{
    state={
        feeling:''
    }
    onInputChange =(event, input) => {
        this.setState({
            [input]: event.target.value
        });
    }
    onNextClick = () => {
        this.props.history.push("/howIsYourCourseWork")
    }
    render(){
       
        return(<div>
            <h1>How are you feeling today?</h1>
            <input required type="number" onChange={(event)=>this.onInputChange(event, 'feeling')}/>

            <button onClick={this.onNextClick}>Next -></button>
            </div>
        )
    }
}
export default FeelingPage;