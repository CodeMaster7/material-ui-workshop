import React from 'react'

import AppBar from 'material-ui/AppBar'

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


class MatAppBar extends React.Component {
    render(){
        return (
            <div>
                <AppBar
                    title="Title"
                    // iconElementLeft={<IconButton><NavigationClose /></IconButton>} // Shows the delete icon next to the title
                    showMenuIconButton={true} // Shows the hamburger menu on the left of the title
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                            <IconButton><MoreVertIcon /></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            maxHeight={200}
                        >
                            <MenuItem> First Item </MenuItem>
                            <MenuItem> Second Item </MenuItem>
                            <MenuItem> Third Item </MenuItem>
                            <MenuItem> Fourth Item </MenuItem>
                            <MenuItem> Fifth Item </MenuItem>
                            <MenuItem> Sixth Item </MenuItem>
                            <MenuItem> Seventh Item </MenuItem>
                        </IconMenu>
                    }
                />
            </div>
        )
    }
}

export default MatAppBar