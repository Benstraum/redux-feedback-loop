import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './AdminPage.css'

class AdminPage extends Component {

    state = {
        feedback: []
    }

    componentDidMount() {
        this.getAdminOrders()
    }
    getAdminOrders = () => {
        axios({
            method: "GET",
            url: '/feedback'
        })
            .then((response) => {
                this.setState({
                    feedback: response.data
                })
            })
            .catch(err => console.log('err GET', err));
    }

    //this contains the table that will pull information down from the admin reducer
    render() {
        return (
            <div className="AdminPage">
                <header>
                    <h1>Prime Student Checkins</h1>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*This will map through the redux state and display the appropriate information to each of the table rows*/}
                        {this.state.feedback.map(feedback =>
                            (<tr key={feedback.id}>
                                <th>{feedback.feeling}</th>
                                <th>{feedback.understanding}</th>
                                <th>{feedback.support}</th>
                                <th>{feedback.comments}</th>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}
export default connect(putReduxStateOnProps)(AdminPage);
