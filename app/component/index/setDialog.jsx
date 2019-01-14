import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
//import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SimpleTable from './table.jsx';
import AlignItemsList from './lists.jsx';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
    width: '500px',
    
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
  
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          {/* <CloseIcon /> */} ❌
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = () => {
    //this.props.closeMenu();
    this.setState({
      open: true,
    });
    //let handleCloseMenu = function (){
      
    //}
    
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.closeMenu();

  };

  render() {

    let {title} = this.props;
    
    return (
      <div>
        <Button onClick={this.handleClickOpen}>
          {title}
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
          scroll={'paper'}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Edit Component
          </DialogTitle>
          <DialogContent>
            
            <Typography gutterBottom>
              Title
            </Typography>
            <AlignItemsList />
            {/* <Divider /> */}
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save 
            </Button>
            <Button onClick={this.handleClose} >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedDialogDemo;
