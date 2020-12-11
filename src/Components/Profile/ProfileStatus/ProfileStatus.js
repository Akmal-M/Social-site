import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        console.log('this:', this)
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
       // this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState( {
            status: e.currentTarget.value
        } )
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    // if(prevProps  !== this.props.status) {
    //     this.setState({
    //         status : this.props.status
    //     })
    // }
    // }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div  onDoubleClick={ this.activateEditMode}>{this.props.status || '----'}</div>
                }
                {this.state.editMode &&
                <input onChange={this.onStatusChange} autoFocus={true}  onBlur={this.deActivateEditMode} value={this.state.status}                                                                                               />
                }
            </div>
        )
    }
}

export default ProfileStatus;