import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import BarChartContainer from "./BarChartContainer.jsx";
import PieChartContainer from "./PieChartContainer.jsx";
import LineChartContainer from "./LineChartContainer.jsx";
import ScatterPlotContainer from "./ScatterPlotContainer.jsx";
import AreaChartContainer from "./AreaChartContainer.jsx";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    backgroundColor: "#f5f5f5",
    padding: 15
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: 320,
    width: 332,
    color: theme.palette.text.secondary,
    boxSizing: "border-box"
  }
});

class Layout extends React.Component {
  constructor(props) {
    // props
    super(props);

    this.state = {
      direction: "row",
      justify: "flex-start",
      alignItems: "flex-start",
    };
    
  }

  render() {
    const { alignItems, direction, justify } = this.state;
    const { classes } = this.props;


    return (
      
          <Grid
            className={classes.demo}
            container
            spacing={16}
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
            <Grid item>
              <Paper
                className={classes.paper}
                style={{
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                <LineChartContainer />
              </Paper>
            </Grid>

            <Grid item>
              <Paper
                className={classes.paper}
                style={{
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                <BarChartContainer />
              </Paper>
            </Grid>
            
            <Grid item>
              <Paper
                className={classes.paper}
                style={{
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                <ScatterPlotContainer />
              </Paper>
            </Grid>
            
            <Grid item>
              <Paper
                className={classes.paper}
                style={{
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                <AreaChartContainer />
              </Paper>
            </Grid>
            
            <Grid item>
              <Paper
                className={classes.paper}
                style={{
                  paddingTop: 10,
                  paddingBottom: 10
                }}
              >
                <PieChartContainer />
              </Paper>
            </Grid>
          
          </Grid>
    
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
