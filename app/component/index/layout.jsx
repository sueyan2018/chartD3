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

import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);

import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';

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

class BasicLayout extends React.Component {
  static defaultProps = {
    className: "layout",
    items: 4,
    rowHeight: 100,
    onLayoutChange: function() {},
    cols: 4
  };
  
  constructor(props) {
    // props
    super(props);
    
    this.state = {
      direction: "row",
      justify: "flex-start",
      alignItems: "flex-start",
    };
    const layout = this.generateLayout();
    this.state = { layout };
  }
  generateDOM() {
    return [
      <div key={"1"}>
         <LineChartContainer />
      </div>,
      <div key={"2"}>
         <BarChartContainer />
      </div>,
      <div key={"3"}>
         <PieChartContainer />
      </div>,
      <div key={"4"}>
        <ScatterPlotContainer />
      </div>
    ];
  }
  generateLayout() {
    return [
      {
        x: 0,
        y: 0,
        w: 1,
        h: 3,
        i: "1"
      },
      {
        x: 1,
        y: 0,
        w: 1,
        h: 3,
        i: "2"
      },
      {
        x: 2,
        y: 0,
        w: 1,
        h: 3,
        i: "3"
      },
      {
        x: 3,
        y: 0,
        w: 1,
        h: 3,
        i: "4"
      }
    ];
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {

    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    )
  }
  // render() {
  //   const { alignItems, direction, justify } = this.state;
  //   const { classes } = this.props;

  //   return (
      
  //         <Grid
  //           className={classes.demo}
  //           container
  //           spacing={16}
  //           alignItems={alignItems}
  //           direction={direction}
  //           justify={justify}
  //         >
  //           <Grid item>
  //             <Paper
  //               className={classes.paper}
  //               style={{
  //                 paddingTop: 10,
  //                 paddingBottom: 10
  //               }}
  //             >
  //               <LineChartContainer />
  //             </Paper>
  //           </Grid>

  //           <Grid item>
  //             <Paper
  //               className={classes.paper}
  //               style={{
  //                 paddingTop: 10,
  //                 paddingBottom: 10
  //               }}
  //             >
  //               <BarChartContainer />
  //             </Paper>
  //           </Grid>
            
  //           <Grid item>
  //             <Paper
  //               className={classes.paper}
  //               style={{
  //                 paddingTop: 10,
  //                 paddingBottom: 10
  //               }}
  //             >
  //               <ScatterPlotContainer />
  //             </Paper>
  //           </Grid>
            
  //           <Grid item>
  //             <Paper
  //               className={classes.paper}
  //               style={{
  //                 paddingTop: 10,
  //                 paddingBottom: 10
  //               }}
  //             >
  //               <AreaChartContainer />
  //             </Paper>
  //           </Grid>
            
  //           <Grid item>
  //             <Paper
  //               className={classes.paper}
  //               style={{
  //                 paddingTop: 10,
  //                 paddingBottom: 10
  //               }}
  //             >
  //               <PieChartContainer />
  //             </Paper>
  //           </Grid>
          
  //         </Grid>
    
  //   );
  // }

}

// Layout.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Layout);
module.exports = BasicLayout;