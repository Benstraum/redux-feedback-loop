import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class ReviewPage extends Component{
    finishForm =() => {
        axios({
            method:"POST",
            url:'feedback',
            data:this.props.feedback
        })
        .then(response=> console.log('post is gucci'))
        .catch(err =>console.log('this is err in post', err))
        //then inser some modal thing
    }
    render(){
        let  feeling=this.props.feedback.feeling ,
        understanding= this.props.feedback.understanding,
        support=this.props.feedback.support
        return(<div>
            <h1>Double check your feedback please :)</h1>
            <ul>
                <li>Feelings: {feeling} <button>Edit</button></li>
                <li>Understanding: {understanding} <button>Edit</button></li>
                <li>Support: {support} <button>Edit</button></li>
                <li>Comments: {this.props.feedback.comment} <button>Edit</button></li>
            </ul>
           {feeling === null|| understanding === null ||support === null ? <p>You actually have to fill out the form </p> : <button onClick={this.finishForm}>submit your information to my braiiiiiin</button>}
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => {
    return {
       feedback: reduxState.feedbackReducer
    }
}
export default connect(putReduxStateOnProps)(ReviewPage);
