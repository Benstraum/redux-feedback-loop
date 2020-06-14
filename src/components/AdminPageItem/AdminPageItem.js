import React, { Component } from 'react'


import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class AdminPageItem extends Component {
    render() {
        return (
            <>
                <TableRow key={this.props.feedback.id}>
                    <TableCell scope="row">
                        response: #{this.props.feedback.id}
                    </TableCell>
                    <TableCell align="left">{this.props.feedback.feeling}</TableCell>
                    <TableCell align="left">{this.props.feedback.understanding}</TableCell>
                    <TableCell align="left">{this.props.feedback.support}</TableCell>
                    <TableCell align="left">{this.props.feedback.comments}</TableCell>
                    <TableCell align="left"><Button variant="contained" color="secondary" onClick={() => this.props.deleteButtonHandler(this.props.feedback.id)}>Delete</Button></TableCell>
                </TableRow>
            </>
        )
    }
}

export default AdminPageItem;