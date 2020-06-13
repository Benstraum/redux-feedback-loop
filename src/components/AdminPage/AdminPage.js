import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './AdminPage.css'
//sweetalert
import Swal from 'sweetalert2'
//mat ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class AdminPage extends Component {

    state = {
        feedback: []
    }

    componentDidMount() {
        this.getFeedback()
    }
    getFeedback = () => {
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
    deleteButtonHandler = (object) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This will permanently delete this feedback',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    "Poof, it's gone",
                    "success",
                    axios.delete(`/feedback/${object}`)
                        .then(response => {
                            console.log('delete response', response)
                            this.getFeedback()
                        })
                        .catch(error => {
                            console.log('error in delete', error)
                        })
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Feedback not deleted',
                    'error'
                )
            }
        })

    }//END DELETE func

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
                                <TableCell align="right"><b></b></TableCell>
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
                                    <TableCell align="left"><Button variant="contained" color="secondary" onClick={() =>this.deleteButtonHandler(feedback.id)}>Delete</Button></TableCell>
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
