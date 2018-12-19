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

import  {Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

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

export default class BasicLayout extends React.Component {
  
  constructor(props) {
    // props
    super(props);
    
    this.state = {
      currentBreakpoint: "xs",
      direction: "row",
      justify: "flex-start",
      alignItems: "flex-start",
      layouts: { lg: props.initialLayout }
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
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

  onLayoutChange(layout, layouts) {
    this.props.onLayoutChange(layout, layouts);
  }

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint
    });
  }

  render() {

    return (
      <ResponsiveReactGridLayout
        {...this.props}
        layouts={this.state.layouts}
        onBreakpointChange={this.onBreakpointChange}
        onLayoutChange={this.onLayoutChange}
        measureBeforeMount={false}
        useCSSTransforms={false}
        compactType={"vertical"}
        preventCollision={!"vertical"}
      >
        {this.generateDOM()}
      </ResponsiveReactGridLayout>
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
// module.exports = BasicLayout;
BasicLayout.defaultProps = {
  className: "layout",
  rowHeight: 100,
  onLayoutChange: function() {},
  cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
  initialLayout: generateLayout()
};

function generateLayout() {
  return [
    {
      x: 0,
      y: 0,
      w: 2,
      h: 3,
      i: "1"
    },
    {
      x: 2,
      y: 0,
      w: 2,
      h: 3,
      i: "2"
    },
    {
      x: 4,
      y: 0,
      w: 2,
      h: 3,
      i: "3"
    },
    {
      x: 6,
      y: 0,
      w: 2,
      h: 3,
      i: "4"
    }
  ];
}