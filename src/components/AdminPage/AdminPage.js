import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './AdminPage.css'

//mat ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
                <TableContainer component={Paper}>
                    <Table className='table' aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>feedback</b></TableCell>
                                <TableCell align="right"><b>Feeling</b></TableCell>
                                <TableCell align="right"><b>Understanding</b></TableCell>
                                <TableCell align="right"><b>Support</b></TableCell>
                                <TableCell align="right"><b>Comments</b></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.feedback.map(feedback => (
                                <TableRow key={feedback.id}>
                                    <TableCell scope="row">
                                        response: #{feedback.id}
                                    </TableCell>
                                    <TableCell align="left">{feedback.feeling}</TableCell>
                                    <TableCell align="left">{feedback.understanding}</TableCell>
                                    <TableCell align="left">{feedback.support}</TableCell>
                                    <TableCell align="left">{feedback.comments}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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
