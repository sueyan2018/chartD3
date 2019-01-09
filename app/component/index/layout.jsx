// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

// import BarChartContainer from "./BarChartContainer.jsx";
// import PieChartContainer from "./PieChartContainer.jsx";
// import LineChartContainer from "./LineChartContainer.jsx";
// import ScatterPlotContainer from "./ScatterPlotContainer.jsx";
// import AreaChartContainer from "./AreaChartContainer.jsx";

// import  {Responsive, WidthProvider } from "react-grid-layout";

// const ResponsiveReactGridLayout = WidthProvider(Responsive);

// import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   demo: {
//     backgroundColor: "#f5f5f5",
//     padding: 15
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     height: 320,
//     width: 332,
//     color: theme.palette.text.secondary,
//     boxSizing: "border-box"
//   }
// });

// export default class BasicLayout extends React.Component {
  
//   constructor(props) {
//     // props
//     super(props);
    
//     this.state = {
//       currentBreakpoint: "xs",
//       direction: "row",
//       justify: "flex-start",
//       alignItems: "flex-start",
//       layouts: { lg: props.initialLayout }
//     };

//     this.onLayoutChange = this.onLayoutChange.bind(this);
//     this.onBreakpointChange = this.onBreakpointChange.bind(this);
//   }
//   generateDOM() {
//     const removeStyle = {
//       position: "absolute",
//       right: "2px",
//       top: 0,
//       cursor: "pointer"
//     };
//     return [
//       <div key={"1"}>
//          <LineChartContainer />
//          <span
//           className="remove"
//           style={removeStyle}
//           onClick={this.onRemoveItem.bind(this, 1)}
//         >x</span>
//       </div>,
//       <div key={"2"}>
//          <BarChartContainer />
//          <span
//           className="remove"
//           style={removeStyle}
//           onClick={this.onRemoveItem.bind(this, 2)}
//         >x</span>
//       </div>,
//       <div key={"3"}>
//          <PieChartContainer />
//          <span
//           className="remove"
//           style={removeStyle}
//           onClick={this.onRemoveItem.bind(this, 3)}
//         >x</span>
//       </div>,
//       <div key={"4"}>
//         <ScatterPlotContainer />
//         <span
//           className="remove"
//           style={removeStyle}
//           onClick={this.onRemoveItem.bind(this, 4)}
//         >x</span>
//       </div>
//     ];
//   }

//   onLayoutChange(layout, layouts) {
//     this.props.onLayoutChange(layout, layouts);
//   }

//   onBreakpointChange(breakpoint) {
//     this.setState({
//       currentBreakpoint: breakpoint
//     });
//   }

//   onRemoveItem(i) {
//     console.log("removing", i);
// }

//   render() {

//     return (
//       <ResponsiveReactGridLayout
//         {...this.props}
//         layouts={this.state.layouts}
//         onBreakpointChange={this.onBreakpointChange}
//         onLayoutChange={this.onLayoutChange}
//         measureBeforeMount={false}
//         useCSSTransforms={false}
//         compactType={"vertical"}
//         preventCollision={!"vertical"}
//       >
//         {this.generateDOM()}
//       </ResponsiveReactGridLayout>
//     )
//   }
  
//   // render() {
//   //   const { alignItems, direction, justify } = this.state;
//   //   const { classes } = this.props;

//   //   return (
      
//   //         <Grid
//   //           className={classes.demo}
//   //           container
//   //           spacing={16}
//   //           alignItems={alignItems}
//   //           direction={direction}
//   //           justify={justify}
//   //         >
//   //           <Grid item>
//   //             <Paper
//   //               className={classes.paper}
//   //               style={{
//   //                 paddingTop: 10,
//   //                 paddingBottom: 10
//   //               }}
//   //             >
//   //               <LineChartContainer />
//   //             </Paper>
//   //           </Grid>

//   //           <Grid item>
//   //             <Paper
//   //               className={classes.paper}
//   //               style={{
//   //                 paddingTop: 10,
//   //                 paddingBottom: 10
//   //               }}
//   //             >
//   //               <BarChartContainer />
//   //             </Paper>
//   //           </Grid>
            
//   //           <Grid item>
//   //             <Paper
//   //               className={classes.paper}
//   //               style={{
//   //                 paddingTop: 10,
//   //                 paddingBottom: 10
//   //               }}
//   //             >
//   //               <ScatterPlotContainer />
//   //             </Paper>
//   //           </Grid>
            
//   //           <Grid item>
//   //             <Paper
//   //               className={classes.paper}
//   //               style={{
//   //                 paddingTop: 10,
//   //                 paddingBottom: 10
//   //               }}
//   //             >
//   //               <AreaChartContainer />
//   //             </Paper>
//   //           </Grid>
            
//   //           <Grid item>
//   //             <Paper
//   //               className={classes.paper}
//   //               style={{
//   //                 paddingTop: 10,
//   //                 paddingBottom: 10
//   //               }}
//   //             >
//   //               <PieChartContainer />
//   //             </Paper>
//   //           </Grid>
          
//   //         </Grid>
    
//   //   );
//   // }

// }

// // Layout.propTypes = {
// //   classes: PropTypes.object.isRequired
// // };

// // export default withStyles(styles)(Layout);
// // module.exports = BasicLayout;
// BasicLayout.defaultProps = {
//   className: "layout",
//   rowHeight: 100,
//   onLayoutChange: function() {},
//   cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
//   breakpoints : {lg: 1800, md: 1500 , sm :900, xs:600, xxs:0},
//   initialLayout: generateLayout()
// };

// function generateLayout() {
//   return [
//     {
//       x: 0,
//       y: 0,
//       w: 2,
//       h: 3,
//       i: "1"
//     },
//     {
//       x: 2,
//       y: 0,
//       w: 2,
//       h: 3,
//       i: "2"
//     },
//     {
//       x: 4,
//       y: 0,
//       w: 2,
//       h: 3,
//       i: "3"
//     },
//     {
//       x: 6,
//       y: 0,
//       w: 2,
//       h: 3,
//       i: "4"
//     }
//   ];
// }


import React, { Fragment } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import BarChartContainer from "./BarChartContainer.jsx";
import PieChartContainer from "./PieChartContainer.jsx";
import LineChartContainer from "./LineChartContainer.jsx";
import ScatterPlotContainer from "./ScatterPlotContainer.jsx";
import AreaChartContainer from "./AreaChartContainer.jsx";

import TitleControl from "./TitleControl.jsx";


import Series from "./LineChartHolder.jsx";
import Groupedcolumn from './BarChartHolder.jsx';
import Labelline from './PieChartHolder.jsx';
import PointC from './ScatterPlotChartHolder';
import Percent from './AreaChartHolder.jsx';
/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
class BasicLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    breakpoints : {lg: 1800, md: 1500 , sm :900, xs:600, xxs:0},
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
    onLayoutChange: function() {}
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      items : nextProps.items
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      counter: 5
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

    //let comp = <LineChartContainer x={el.w} y={el.h} />;
    let comp = <Series x={el.w} y={el.h}/>;
    switch(i % 5){
      case 1:
      comp = <Series x={el.w} y={el.h}/>;
      //comp = <LineChartContainer x={el.w} y={el.h} />;
      break;
      case 2:
      comp = <Groupedcolumn  x={el.w} y={el.h} />
      //comp = <BarChartContainer x={el.w} y={el.h} />;
      break;
      case 3:
      comp = <Labelline x={el.w} y={el.h} />;
      break;
      case 4:
      comp = <PointC x={el.w} y={el.h} />;
      break;
      default:
      comp = <Percent x={el.w} y={el.h} />;
      break;

    }
    return (
      <div key={i} data-grid={el}>
        <TitleControl callbackSet={this.onSetItem.bind(this, i)} callbackDelete={this.onRemoveItem.bind(this, i)} title={"Chart"+i}/>
        {el.add ? (
          <span
            className="add text"
            onClick={this.onAddItem}
            title="You can add an item by clicking here, too."
          >
            Add +
          </span>
        ) : (
          <div>
            {comp}
          </div>
            
          
        )}
        
        {/* <span
          className="remove"
          style={removeStyle}
          onClick={this.onRemoveItem.bind(this, i)}
        >
          x
        </span> */}

      </div>
    );
  }

  onAddItem() {
    /*eslint no-console: 0*/
    console.log("adding", "n" + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: this.state.counter.toString(),
        x: (this.state.items.length * 2) % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 3
      }),
      // Increment the counter to ensure key is always unique.
      counter: this.state.counter + 1
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
    //console.log("removing", i);
    this.props.onRemoveItem(i);
  }

  onSetItem(i){
    console.log(i);
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
    );
  }
}

export default BasicLayout;