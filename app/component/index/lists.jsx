import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SketchExample from "./colorPicker.jsx";
const styles = theme => ({
  root: {
    width: "100%",
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  itemText: {
    textAlign: "left",
    flex: "none"
  },
  button: {
    //margin: theme.spacing.unit,
    padding: "2px",
    margin: "2px 0px"
  },
  inline: {
    display: "inline"
  },
  tabBtn: {
    width: "80px",
    minWidth: "70px"
  }
});
class AlignItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textFieldValue: "",
      tabValue: 0,
      titleColor: '#f5f5f5',
      chartBackgoudColor:'#fff',
      chartBorderColor:'#dfdfdf',
    };
  }

  handleTextFieldChange = event => {
    this.setState({ textFieldValue: event.target.value });
    this.props.handleTitleDialog(event.target.value);
  };

  handleTabsChange = (event, value) => {
    this.setState({ tabValue: value });
    this.props.handleTabsDialog(value);
  };

  handleColor = color => {
    this.setState({ titleColor: color });
    this.props.handleColorDialog(color);
  };

  handleBackgoudColor = color => {
    this.setState({ chartBackgoudColor: color });
    this.props.handleBackgoudColorDialog(color);
  };

  handleBorderColor = color => {
    this.setState({ chartBorderColor: color });
    this.props.handleBorderColorDialog(color);
  };

  render() {
    const { classes, type } = this.props;

    return (
      <div>
        {type == 1 ? (
          <List className={classes.root}>
            <ListItem alignItems="center">
              <ListItemText className={classes.itemText} primary="Text" />
              <TextField
                id="filled-full-width"
                ref="textfield"
                //label="Label"
                placeholder="Title"
                //helperText="Full width!"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                value={this.state.textFieldValue}
                onChange={this.handleTextFieldChange}
              />
            </ListItem>

            <ListItem alignItems="center">
              <ListItemText className={classes.itemText} primary="Alignment" />
              <div>
                <Tabs
                  value={this.state.tabValue}
                  onChange={this.handleTabsChange}
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab className={classes.tabBtn} label="Left" />
                  <Tab className={classes.tabBtn} label="Center" />
                  <Tab className={classes.tabBtn} label="Right" />
                </Tabs>
              </div>
            </ListItem>
            <ListItem alignItems="center">
              <ListItemText className={classes.itemText} primary="Color" />
              <SketchExample handleColor={this.handleColor.bind(this)} />
            </ListItem>
          </List>
        ) : (
          <List className={classes.root}>
            <ListItem alignItems="center">
              <ListItemText
                className={classes.itemText}
                primary="BackgroundColor"
              />
              <SketchExample
                handleColor={this.handleBackgoudColor.bind(this)}
              />
            </ListItem>
            <ListItem alignItems="center">
              <ListItemText
                className={classes.itemText}
                primary="BorderColor"
              />
              <SketchExample handleColor={this.handleBorderColor.bind(this)} />
            </ListItem>
          </List>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(AlignItemsList);
