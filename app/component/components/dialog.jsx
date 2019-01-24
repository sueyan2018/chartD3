import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";
import AlignItemsList from "./list.jsx";

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
    width: "500px"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500]
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
           <CloseIcon /> 
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit
  }
}))(MuiDialogActions);

class NewDialogDemo extends React.Component {
  state = {
    open: false,
    scroll: "paper",
    chartType:'',
    textFieldValue: "",
    tabValue: 0,
    titleColor: '#f5f5f5',
    chartBackgoudColor:'#fff',
    chartBorderColor:'#dfdfdf',
  };

  handleClickOpen = () => {
    //this.props.closeMenu();
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  saveInDialog = () => {
    this.props.saveInMenu(this.state);
    this.handleClose();
  };

  handleTypeDialog = type => {
    this.setState({ chartType: type });
  };
  
  handleTitleDialog = title => {
    this.setState({ textFieldValue: title });
  };

  handleTabsDialog = value => {
    this.setState({ tabValue: value });
  };

  handleColorDialog = color => {
    this.setState({ titleColor: color });
  };

  handleBackgoudColorDialog = color => {
    this.setState({ chartBackgoudColor: color });
  };
  
  handleBorderColorDialog = color => {
    this.setState({ chartBorderColor: color });
  };

  render() {
    let { title } = this.props;
    return (
      <div>
        <Button 
            color="primary"
            variant="contained"
            //size="small"
            onClick={this.handleClickOpen}
        >
            {title}
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
          scroll={"paper"}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {title}
          </DialogTitle>

          <DialogContent>
            <AlignItemsList
              handleTypeDialog={this.handleTypeDialog.bind(this)}
              handleTitleDialog={this.handleTitleDialog.bind(this)}
              handleTabsDialog={this.handleTabsDialog.bind(this)}
              handleColorDialog={this.handleColorDialog.bind(this)}
              handleBackgoudColorDialog={this.handleBackgoudColorDialog.bind(this)}
              handleBorderColorDialog={this.handleBorderColorDialog.bind(this)}
            />
          </DialogContent>

          <DialogActions>
            <Button onClick={this.saveInDialog} color="primary">
              Save
            </Button>
            <Button onClick={this.handleClose} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default NewDialogDemo;
