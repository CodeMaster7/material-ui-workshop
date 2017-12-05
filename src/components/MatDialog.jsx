import React from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

class MatDialog extends React.Component {
    constructor(){
        super()
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(){
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        
        const modalActions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleToggle}
            />,
            <FlatButton
              label="Submit"
              secondary={true}
              onClick={this.handleToggle}
            />,
          ]

        return (
            <div>
                <button onClick={this.handleToggle}>Open Dialog Box!</button>
                <Dialog
                    title="Andrew's Super Awesome Dialog Box"
                    actions={modalActions} // The buttons the user has access to click on. This points to the array I made. It can be a single element.
                    modal={true} // If false (default) the user can click away (or escape) from the modal to close the dialog box
                    onRequestClose={this.handleToggle} // pairs with the modal
                    open={this.state.open} // required. Controls when the dialog is open or not.
                >
                    Woah.... Hold on there buddy.... Are you sure you want to continue?
                </Dialog>
            </div>
        )
    }
}

export default MatDialog