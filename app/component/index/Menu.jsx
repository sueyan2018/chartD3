import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CustomizedDialogDemo from './setDialog.jsx';

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });

  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <CustomizedDialogDemo title={"Edit style"} closeMenu={this.handleClose.bind(this)}/>
          {/* <MenuItem onClick={this.handleClose}>Edit style</MenuItem>
          <MenuItem onClick={this.handleClose}>Edit content</MenuItem>
          <MenuItem onClick={this.handleClose}>Clear</MenuItem> */}
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;