import React, {Component} from 'react'
import { connect } from 'react-redux'
class CommentPage extends Component{
    state={
        comment:''
    }
    onInputChange = (event, input) => {
        this.setState({
            [input]: event.target.value
        });
    }
    onNextClick = () => {
        this.props.dispatch({
            type:"SET_COMMENT",
            payload:this.state.comment
        })
        this.props.history.push("/Review")
    }
    render(){
        return(
            <div>
            <h1>Any other comments/concerns?</h1>
            <input onChange={(event)=>this.onInputChange(event, 'comment')}/>

            <button onClick={this.onNextClick}>Next -></button>
            </div>
        )
    }
}
export default connect()(CommentPage);