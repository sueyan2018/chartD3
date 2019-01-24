import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SketchExample from "./colorPicker.jsx";
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

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
  },
  
  commonTypography: {
    color: "#868aa8",
    fontSize: '18px',
    fontWeight: 'blod',
  },
  selectEmpty: {
    width: '100%'  
  },
  textfieldStyle:{
    backgroundColor: '#fff',
    color: "#868aa8",
    margin: '0'
  }
});
class AlignItemsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartType:'',
      textFieldValue: "",
      tabValue: 0,
      titleColor: '#f5f5f5',
      chartBackgoudColor:'#fff',
      chartBorderColor:'#dfdfdf',
    };
  }
  
  handleTypeChange = event => {
    this.setState({ chartType: event.target.value });
    this.props.handleTypeDialog(event.target.value);
  };
  
  handleTextFieldChange = event => {
    //console.log(event.target.value)
    this.setState({ textFieldValue: event.target.value });
    this.props.handleTitleDialog(event.target.value);
  };

  handleTabsChange = (event, tab) => {
    this.setState({ tabValue: tab });
    this.props.handleTabsDialog(tab);
  };

  handleColor = color => {
    //console.log("list####handleColor",color)
    this.setState({ titleColor: color });
    this.props.handleColorDialog(color);
  };

  handleBackgoudColor = color => {
    //console.log("list####handleBackgoudColor",color)
    this.setState({ chartBackgoudColor: color });
    this.props.handleBackgoudColorDialog(color);
  };

  handleBorderColor = color => {
    //console.log("list####handleBorderColor",color)
    this.setState({ chartBorderColor: color });
    this.props.handleBorderColorDialog(color);
  };

  render() {
    const { classes } = this.props;
  
    return (
      <div>
        
          <List className={classes.root}>
          
           <Typography className={classes.commonTypography} gutterBottom>
                Chart Type Setting
           </Typography>
           <ListItem alignItems="center">
              <ListItemText className={classes.itemText} primary="Type" />
              <Select
                value={this.state.chartType}
                onChange={this.handleTypeChange}
                input={<Input name="type" id="type-label-placeholder" />}
                displayEmpty
                name="type"
                className={classes.selectEmpty}
              >
                
                <MenuItem value={'area'}>AreaChart</MenuItem>
                <MenuItem value={'line'}>LineChart</MenuItem>
                <MenuItem value={'bar'}>BarChart</MenuItem>
                <MenuItem value={'pie'}>PieChart</MenuItem>
                <MenuItem value={'point'}>PointChart</MenuItem>
              </Select>
            </ListItem>                            
            
            <Typography className={classes.commonTypography} gutterBottom>
              Title Setting
            </Typography>
            <ListItem alignItems="center">
              <ListItemText className={classes.itemText} primary="Text" />
              <TextField
                className={ classes.textfieldStyle }
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
            
            <Typography className={classes.commonTypography} gutterBottom>
              Content Setting
            </Typography>
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
       
      </div>
    );
  }
}

export default withStyles(styles)(AlignItemsList);
