import React, { Fragment } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";
import { Button } from "@material-ui/core";
import Series from "./LineChartHolder.jsx";
import Groupedcolumn from "./BarChartHolder.jsx";
import Labelline from "./PieChartHolder.jsx";
import PointC from "./ScatterPlotChartHolder";
import Percent from "./AreaChartHolder.jsx";
import TitleControl from "./TitleControl.jsx";
import NewChart from "../components/newChart.jsx";


const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */

class BasicLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    breakpoints: { lg: 1800, md: 1500, sm: 900, xs: 600, xxs: 0 },
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    rowHeight: 100,
    title: "Chart",
    value: 0,
    onLayoutChange: function() {},
    
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      counter: 5,
      backgroudColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
      borderColor: ["#fff", "#fff", "#fff", "#fff", "#fff"],
      bbackgroudColorStyle: ["", "", "", "", ""],
      borderColorStyle: ["", "", "", "", ""],
    
    };

    this.onAddItem = this.onAddItem.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

  createElement(el) {

    const chartType = el.chartType;
    const textFieldValue = el.textFieldValue;
    const tabValue = el.tabValue;
    const titleColor = el.titleColor;
    const chartBackgoudColor = el.chartBackgoudColor;
    const chartBorderColor = el.chartBorderColor;
    
    const i =  el.add ? "+" : el.i;
    console.log(i)
    let comp = <Series x={el.w} y={el.h} />;
    
    switch (chartType) {
      case 'line':
        comp = <Series x={el.w} y={el.h} />;
        break;
      case 'bar':
        comp = <Groupedcolumn x={el.w} y={el.h} />;
        break;
      case 'pie':
        comp = <Labelline x={el.w} y={el.h} />;
        break;
      case 'point':
        comp = <PointC x={el.w} y={el.h} />;
        break;
      default:
        comp = <Percent x={el.w} y={el.h} />;
        break;
    }
    console.log(this.state.backgroudColorStyle)
    return (
      
      <div
        key={i}
        data-grid={el}
        style={{
          backgroundColor:  chartBackgoudColor,
          borderColor:  chartBorderColor
        }}
        style={{
          backgroundColor: this.state.backgroudColorStyle && this.state.backgroudColorStyle[i] ? this.state.backgroudColorStyle[i] : chartBackgoudColor,
          borderColor: this.state.borderColorStyle && this.state.borderColorStyle[i] ? this.state.borderColorStyle[i] : chartBorderColor
        }}
        // style={{
        //   backgroundColor: this.state.backgroudColorStyle[i],
        //   border: "1px solid" + this.state.borderColorStyle[i]
        // }}
      >
        <TitleControl
          callbackDelete={this.onRemoveItem.bind(this, i)}
          textFieldValue={textFieldValue}
          tabValue={tabValue}
          titleColor={titleColor}
          chartBackgoudColor={chartBackgoudColor}
          chartBorderColor={chartBorderColor}
          // handleBackgoudColorLayout={this.handleBackgoudColorLayout.bind(this,i)}
          // handleBorderColorLayout={this.handleBorderColorLayout.bind(this, i)}
          // saveContent={this.saveContent.bind(this, i)}
          saveContentNew={this.saveContentNew.bind(this,i)}
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
          <div>{comp}</div>
        )}

      </div>
    );
  }

  onAddItem(params) {

    this.props.add(params);
    
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
  
  // handleBackgoudColorLayout = (i, color) => {
  //   console.log("handleBackgoudColorLayout", color);
  //   this.state.backgroudColor[i] = color;
  //   this.setState({ backgroudColor: this.state.backgroudColor });
  // };

  // handleBorderColorLayout = (i, color) => {
  //   console.log("handleBorderColorLayout", color);
  //   this.state.borderColor[i] = color;
  //   this.setState({ borderColor: this.state.borderColor });
  // };

  // saveContent(i) {

  //   this.setState({
  //     backgroudColorStyle: this.state.backgroudColor,
  //     borderColorStyle: this.state.borderColor
  //   });
    
  // }
  
  saveContentNew(i,params){
    //this.props.edit(params);
    console.log(i,params);
    
    this.state.backgroudColor[i] = params.chartBackgoudColor;
    this.state.borderColor[i] = params.chartBorderColor;
    this.setState({ 
      backgroudColorStyle: this.state.backgroudColor ,
      borderColorStyle: this.state.borderColor 
    });
  }
  
  render() {
    return (
      <div>
     { /*
        <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={this.onAddItem}
        >
          Add Item
        </Button>
       */ }
        <NewChart 
          addItem ={this.onAddItem}
        />
        
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
