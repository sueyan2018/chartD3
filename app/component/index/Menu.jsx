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

  handleColorMenu = (color) =>{
      console.log("Menu####",color)
      this.props.handleColorTitle(color);        
  };

  handleBackgoudColorMenu = (color) =>{
    console.log("handleBackgoudColorMenu",color)
    this.props.handleBackgoudColorTitle(color);      
  };
  handleBorderColorMenu = (color) =>{
    console.log("handleBorderColorMenu",color)
    this.props.handleBorderColorTitle(color);      
  };

  handleTabsMenu = (value) =>{
    console.log("Menu####",value)
    this.props.handleTabsTitle(value);          
  };

  saveInMenu = () => {
    this.props.saveInTitle(); 
  };

  saveContentInMenu =()=>{
    this.props.saveInContent(); 
  }

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
          <CustomizedDialogDemo 
            type={1}
            handleTabsMenu={this.handleTabsMenu.bind(this)} 
            handleColorMenu={this.handleColorMenu.bind(this)} 
            handleBackgoudColorMenu={this.handleBackgoudColorMenu.bind(this)} 
            handleBorderColorMenu={this.handleBorderColorMenu.bind(this)} 
            title={"Edit style"} 
            closeMenu={this.handleClose.bind(this)}
            saveInMenu={this.saveInMenu.bind(this)}
            />
            <CustomizedDialogDemo 
            type={2}
            handleTabsMenu={this.handleTabsMenu.bind(this)} 
            handleColorMenu={this.handleColorMenu.bind(this)} 
            handleBackgoudColorMenu={this.handleBackgoudColorMenu.bind(this)} 
            handleBorderColorMenu={this.handleBorderColorMenu.bind(this)} 
            title={"Edit Content"} 
            closeMenu={this.handleClose.bind(this)}
            saveInMenu={this.saveContentInMenu.bind(this)}

            />
          {/* <MenuItem onClick={this.handleClose}>Edit style</MenuItem>
          <MenuItem onClick={this.handleClose}>Edit content</MenuItem>
          <MenuItem onClick={this.handleClose}>Clear</MenuItem> */}
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;