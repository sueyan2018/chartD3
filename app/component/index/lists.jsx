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
});
class AlignItemsList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      color:''
    }; 
  };

  handleColor = (event) =>{
    console.log("!!!!x"+event)
      this.setState({color: event.target.value});
      
  };

  render() {
//function AlignItemsList(props) {
    const { classes } = this.props;
  
    return (
      <List className={classes.root}>

        <ListItem alignItems="center">        
          <ListItemText  className={classes.itemText } primary="Text" />
          <TextField
            id="filled-full-width"
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
            // onChange={this._handleTextFieldChange}
          />       
        </ListItem>
        <ListItem alignItems="center">        
          <ListItemText className={classes.itemText } primary="Alignment" />
          <div>
              <Button variant="outlined" className={classes.button}>
                  Left
              </Button>
              <Button variant="outlined" className={classes.button}>
                  Center
              </Button>
              <Button variant="outlined" className={classes.button}>
                  Right
              </Button>
          </div>
          
        </ListItem>
        <ListItem alignItems="center">        
          <ListItemText className={classes.itemText } primary="Color" />
          <div>{this.state.color}</div>
          <SketchExample handleColor={this.handleColor.bind(this)}/>
        </ListItem>
      </List>
    );
  }
}

// AlignItemsList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(AlignItemsList);
export default withStyles(styles)(AlignItemsList)