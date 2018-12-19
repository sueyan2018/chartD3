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

// import RGL, { WidthProvider } from "react-grid-layout";

// const ReactGridLayout = WidthProvider(RGL);

import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

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
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
    onLayoutChange: function() {},
  };
  
  constructor(props) {
    // props
    super(props);
    
    // this.state = {
    //   direction: "row",
    //   justify: "flex-start",
    //   alignItems: "flex-start",
    // };
    this.state = {
      items: [0, 1, 2, 3, 4].map(function(i, key, list) {
        return {
          i: i.toString(),
          x: i * 2,
          y: 0,
          w: 3,
          h: 3,
          add: i === (list.length - 1).toString()
        };
      }),
      newCounter: 0
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  createElement(el) {
    const removeStyle = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer"
    };
    const i = el.add ? "+" : el.i;
    return (
      <div key={i} data-grid={el}>
        {el.add ? (
          <span
            className="add text"
            onClick={this.onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          <span className="text">{i}</span>
        )}
        <span
          className="remove"
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, i)}
        >
        remove
        </span>
      </div>
    );
  }
  onAddItem() {
    /*eslint no-console: 0*/
    console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: "n" + this.state.newCounter,
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  }

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
    this.setState({ layout: layout });
  }

  onRemoveItem(i) {
    console.log("removing", i);
    this.setState({ items: _.reject(this.state.items, { i: i }) });
  }

  render() {

    return (
      <div>
        <button onClick={this.onAddItem}>Add Item</button>
        <ResponsiveReactGridLayout
          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
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