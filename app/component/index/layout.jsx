import React, { Fragment } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

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
    title: "Chart",
    value:0,
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
      counter: 5,
      backgroudColor:['#fff','#fff','#fff','#fff','#fff'],
      borderColor:['#fff','#fff','#fff','#fff','#fff'],
      backgroudColorStyle:['#fff','#fff','#fff','#fff','#fff'],
      borderColorStyle:['#fff','#fff','#fff','#fff','#fff'],
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
      <div key={i} data-grid={el} style={{backgroundColor:this.state.backgroudColorStyle[i],border:'1px solid'+this.state.borderColorStyle[i]}}>
        <TitleControl 
        callbackSet={this.onSetItem.bind(this, i)} 
        callbackDelete={this.onRemoveItem.bind(this, i)} 
        onTitle={this.onTitle.bind(this, i)} 
        title={"chart"+i}
        handleBackgoudColorLayout={this.handleBackgoudColorLayout.bind(this,i)}
        handleBorderColorLayout={this.handleBorderColorLayout.bind(this,i)}
        saveContent={this.saveContent.bind(this,i)}
        />
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

  onTitle(value){
console.log("layout####",value)
    this.setState({
      value:value
    })

  }

  handleBackgoudColorLayout = (i,color) =>{
    console.log("handleBackgoudColorLayout",color)
    this.state.backgroudColor[i] = color.hex;
    this.setState({backgroudColor: this.state.backgroudColor});       
  };

  handleBorderColorLayout = (i,color) =>{
    console.log("handleBorderColorLayout",color)
    this.state.borderColor[i] = color.hex;
    this.setState({borderColor: this.state.borderColor});  
  };

  saveContent(i){
    console.log("#####",this.state.backgroudColor,"#####",this.state.borderColor,"   " +i)
         this.setState({
            backgroudColorStyle: this.state.backgroudColor,
            borderColorStyle: this.state.borderColor,
         })
  }
  render() {
    return (
      <div>
        <button onClick={this.onAddItem}>Add Item</button>
        
        <ResponsiveReactGridLayout

          onLayoutChange={this.onLayoutChange}
          onBreakpointChange={this.onBreakpointChange}          
          draggableCancel="input,.aaa"
          {...this.props}
        >
          {_.map(this.state.items, el => this.createElement(el))}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

export default BasicLayout;