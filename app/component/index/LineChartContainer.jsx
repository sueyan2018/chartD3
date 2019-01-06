import React from "react";
import { LineChart,Brush } from "react-d3-components";
import { SizeMe } from 'react-sizeme';

function LineChartContainer(x) {

  console.log(x );
  let data = [
    {
      label: '',
      values: [
        { x: new Date(2015, 2, 5), y: 1 },
        { x: new Date(2015, 2, 6), y: 2 },
        { x: new Date(2015, 2, 7), y: 0 },
        { x: new Date(2015, 2, 8), y: 3 },
        { x: new Date(2015, 2, 9), y: 2 },
        { x: new Date(2015, 2, 10), y: 3 },
        { x: new Date(2015, 2, 11), y: 4 },
        { x: new Date(2015, 2, 12), y: 4 },
        { x: new Date(2015, 2, 13), y: 1 },
        { x: new Date(2015, 2, 14), y: 5 },
        { x: new Date(2015, 2, 15), y: 0 },
        { x: new Date(2015, 2, 16), y: 1 },
        { x: new Date(2015, 2, 16), y: 1 },
        { x: new Date(2015, 2, 18), y: 4 },
        { x: new Date(2015, 2, 19), y: 4 },
        { x: new Date(2015, 2, 20), y: 5 },
        { x: new Date(2015, 2, 21), y: 5 },
        { x: new Date(2015, 2, 22), y: 5 },
        { x: new Date(2015, 2, 23), y: 1 },
        { x: new Date(2015, 2, 24), y: 0 },
        { x: new Date(2015, 2, 25), y: 1 },
        { x: new Date(2015, 2, 26), y: 1 }
      ]
    }
  ];

  let xScale = d3.time.scale().domain([new Date(2015, 2, 5), new Date(2015, 2, 26)]).range([0, 400 - 70]);



  /*
  return (
    <div>
      <LineChart
        data={data}
        width={1000}
        height={400}
        margin={{ top: 10, bottom: 50, left: 50, right: 20 }}
        xScale={xScale}
        xAxis={{ tickValues: xScale.ticks(d3.time.day, 2), tickFormat: d3.time.format("%m/%d") }}
      />
    </div>
  );
  */

  let data2 = [
    {
      label: 'somethingA',
      values: [
        { x: new Date(2015, 2, 5), y: 1 },
        { x: new Date(2015, 2, 6), y: 2 },
        { x: new Date(2015, 2, 7), y: 0 },
        { x: new Date(2015, 2, 8), y: 3 },
        { x: new Date(2015, 2, 9), y: 2 },
        { x: new Date(2015, 2, 10), y: 3 },
        { x: new Date(2015, 2, 11), y: 4 },
        { x: new Date(2015, 2, 12), y: 4 },
        { x: new Date(2015, 2, 13), y: 1 }
      ]
    },
    {
      label: 'somethingB',
      values: [
        { x: new Date(2015, 2, 5), y: 6 },
        { x: new Date(2015, 2, 6), y: 2 },
        { x: new Date(2015, 2, 7), y: 1 },
        { x: new Date(2015, 2, 8), y: 1 },
        { x: new Date(2015, 2, 9), y: 9 },
        { x: new Date(2015, 2, 10), y: 0 },
        { x: new Date(2015, 2, 11), y: 2 },
        { x: new Date(2015, 2, 12), y: 1 },
        { x: new Date(2015, 2, 13), y: 2 }
      ]
    }
  ];
  let tooltipLine = function (label, data) {
    return label + " x: " + data.x + " y: " + data.y;
  }

  let dashFunc = function (label) {
    if (label == "somethingA") {
      return "4 4 4";
    }
    if (label == "somethingB") {
      return "3 4 3";
    }
  }

  let widthFunc = function (label) {
    if (label == "somethingA") {
      return "4";
    }
    if (label == "somethingB") {
      return "2";
    }
  }

  let linecapFunc = function (label) {
    if (label == "somethingA") {
      return "round";
    }
  }

  return (
    
      <SizeMe
          monitorHeight
          refreshRate={32}
          render={({ size }) =>  
            
            <LineChart
                data={data2}
                width={size.width}
                height={x.y * 100}
                margin={{ top: 10, bottom: 30, left: 30, right: 10 }}
                tooltipHtml={tooltipLine}
                tooltipContained
                xAxis={{ innerTickSize: 1, className:"transTest",tickFormat: d3.time.format("%a,%b %d") }}
                yAxis={{ label: "y-label" }}
                shapeColor={"red"}
            //stroke={{ strokeDasharray: dashFunc, strokeWidth: widthFunc, strokeLinecap: linecapFunc }}
            />
           
            
          }
        />
      
  );

}

export default LineChartContainer;
