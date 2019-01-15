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

  handleChange = (event, value) => {
    this.setState({ value: value });
    console.log(this.props);
    this.props.handleTabsDialog(value);  
  };

  handleColor = (color) =>{
    
      console.log("list####",color)
      this.props.handleColorDialog(color);      
  };

  handleTextFieldChange = event => {
    console.log(this.refs.textfield.getValue())
    this.setState({ textFieldValue: event.target.value });
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
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            //variant="fullWidth"
          >
            <Tab className={classes.tabBtn} label="Left" />
            <Tab className={classes.tabBtn} label="Center" />
            <Tab className={classes.tabBtn} label="Right" />
          </Tabs>
              {/* <Button variant="outlined" className={classes.button}>
                  Left
              </Button>
              <Button variant="outlined" className={classes.button}>
                  Center
              </Button>
              <Button variant="outlined" className={classes.button}>
                  Right
              </Button> */}
          </div>
          
        </ListItem>
        <ListItem alignItems="center">        
          <ListItemText className={classes.itemText } primary="Color" />
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