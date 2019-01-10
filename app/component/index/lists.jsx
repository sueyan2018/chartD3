import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
});

function AlignItemsList(props) {
  const { classes } = props;
//   state = {
//     value: 2,
//   }
// let handleChange = function (event, value) {
//     this.setState({ value });
//   }
  
  return (
    <List className={classes.root}>

      <ListItem alignItems="flex-start">        
        <ListItemText primary="Text" />
        <TextField
          id="filled-full-width"
          //label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          //helperText="Full width!"
          fullWidth
          margin="normal"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
        />       
      </ListItem>
      <ListItem alignItems="flex-start">        
        <ListItemText primary="Alignment" />
        <Tabs
          //value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          //onChange={this.handleChange}
        >
          <Tab label="Left" />
          <Tab label="Center"  />
          <Tab label="Right" />
        </Tabs> 
      </ListItem>
      <ListItem alignItems="flex-start">        
        <ListItemText primary="Color" />
        <Tabs
          //value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          //onChange={this.handleChange}
        >
          <Tab label="Left" />
          <Tab label="Center"  />
          <Tab label="Right" />
        </Tabs> 
      </ListItem>
      <ListItem alignItems="flex-start">        
        <ListItemText primary="Size" />
        <Tabs
          //value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          //onChange={this.handleChange}
        >
          <Tab label="Left" />
          <Tab label="Center"  />
          <Tab label="Right" />
        </Tabs> 
      </ListItem>
    </List>
  );
}

AlignItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignItemsList);
