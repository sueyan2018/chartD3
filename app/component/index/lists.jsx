import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import SketchExample from './colorPicker.jsx';
const styles = theme => ({
  root: {
    width: '100%',
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
  },
  itemText:{
    textAlign: 'left',
    flex: 'none',
  },
  button: {
    //margin: theme.spacing.unit,
    padding: '2px',
    margin: '2px 0px'
  },
  inline: {
    display: 'inline',
  },
  tabBtn:{
    width: '80px',
    minWidth: '70px',
  }
});
class AlignItemsList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      textFieldValue:'',
      value: 0,
    }; 
  };

  handleTextFieldChange = event => {
    console.log(event.target.value)
    //this.setState({ textFieldValue: event.target.value });
    this.props.handleTitleDialog(event.target.value);
  };

  handleTabsChange = (event, value) => {
    this.setState({ value: value });
    this.props.handleTabsDialog(value);  
  };

  handleColor = (color) =>{
    console.log("list####handleColor",color)
    this.props.handleColorDialog(color);      
  };

  handleBackgoudColor = (color) =>{
    console.log("list####handleBackgoudColor",color)
    this.props.handleBackgoudColorDialog(color);      
  };

  handleBorderColor= (color) =>{
    console.log("list####handleBorderColor",color)
    this.props.handleBorderColorDialog(color);      
  };


  render() {

    const { classes,type } = this.props;

    return (
      <div>
    
      {
        type == 1 ?

      <List className={classes.root}>
      
        <ListItem alignItems="center">        
          <ListItemText  className={classes.itemText } primary="Text" />
          <TextField
            id="filled-full-width"
            ref="textfield"
            //label="Label"
            style={{ margin: 8 }}
            placeholder="Title"
            //helperText="Full width!"
            fullWidth
            margin="normal"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            // value={this.state.textFieldValue} 
             onChange={this.handleTextFieldChange}
          />       
        </ListItem>
        
        <ListItem alignItems="center">        
          <ListItemText className={classes.itemText } primary="Alignment" />
          <div>
          <Tabs
            value={this.state.value}
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
          <ListItemText className={classes.itemText } primary="Color" />
          <SketchExample handleColor={this.handleColor.bind(this)}/>
        </ListItem>
      
      </List>

      :

      <List className={classes.root}>
        <ListItem alignItems="center">        
          <ListItemText className={classes.itemText } primary="BackgroundColor" />
          <SketchExample handleColor={this.handleBackgoudColor.bind(this)}/>
        </ListItem>
        <ListItem alignItems="center">        
          <ListItemText className={classes.itemText } primary="BorderColor" />
          <SketchExample handleColor={this.handleBorderColor.bind(this)}/>
        </ListItem>
      </List>
          
      }
       </div>
    );
  }
}

// AlignItemsList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(AlignItemsList);
export default withStyles(styles)(AlignItemsList)