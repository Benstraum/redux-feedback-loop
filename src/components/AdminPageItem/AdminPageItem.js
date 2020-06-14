import React, { Component } from 'react'


import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

class AdminPageItem extends Component {
    state={
        help:false
    }
    toggleHelp=()=>{
        this.setState({
            help: !this.state.help
        })
        console.log(this.state)
    }
    render() {
        return (
            <>
                {this.state.help === false ? 
                <TableRow key={this.props.feedback.id}>
                    <TableCell scope="row">
                        response: #{this.props.feedback.id}
                    </TableCell>
                    <TableCell align="left">{this.props.feedback.feeling}</TableCell>
                    <TableCell align="left">{this.props.feedback.understanding}</TableCell>
                    <TableCell align="left">{this.props.feedback.support}</TableCell>
                    <TableCell align="left">{this.props.feedback.comments}</TableCell>
                    <TableCell align="left"><Button variant="outlined" size="small" color="primary" onClick={() => this.toggleHelp(this.props.feedback.id)} >Flag help</Button></TableCell>
                    <TableCell align="left"><Button variant="contained" color="secondary" onClick={() => this.props.deleteButtonHandler(this.props.feedback.id)}>Delete</Button></TableCell>
                </TableRow>
                :   //made inline style cause I couldn't find a way to override it in css 
                <TableRow style={{backgroundColor: 'red'}} className="needHelp" key={this.props.feedback.id}>
                    <TableCell scope="row">
                        response: #{this.props.feedback.id}
                    </TableCell>
                    <TableCell align="left">{this.props.feedback.feeling}</TableCell>
                    <TableCell align="left">{this.props.feedback.understanding}</TableCell>
                    <TableCell align="left">{this.props.feedback.support}</TableCell>
                    <TableCell align="left">{this.props.feedback.comments}</TableCell>
                    <TableCell align="left"><Button variant="outlined" size="small" color="primary" onClick={() => this.toggleHelp(this.props.feedback.id)} >Flag help</Button></TableCell>
                    <TableCell align="left"><Button variant="contained" color="secondary" onClick={() => this.props.deleteButtonHandler(this.props.feedback.id)}>Delete</Button></TableCell>
                </TableRow>}
            </>
        )
    }
}

export default AdminPageItem;