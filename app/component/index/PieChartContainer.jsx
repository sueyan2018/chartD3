import React from "react";
import { PieChart } from "react-d3-components";
import { SizeMe } from 'react-sizeme';

function PieChartContainer(props) {
  let data = {
    label: 'somethingA',
    values: [
      { x: 'SomethingA', y: 10 },
      { x: 'SomethingB', y: 2 },
      { x: 'SomethingC', y: 3 },
      { x: 'SomethingD', y: 4 },
      { x: 'SomethingE', y: 9 },
      { x: 'SomethingF', y: 1 },
      { x: 'SomethingG', y: 2 },
      { x: 'SomethingH', y: 3 },
      { x: 'SomethingI', y: 4 },
      { x: 'SomethingJ', y: 2 },
      { x: 'SomethingK', y: 1 },
      { x: 'SomethingL', y: 3 },
      { x: 'SomethingM', y: 4 },
      { x: 'SomethingN', y: 2 },
      { x: 'SomethingO', y: 1 },
      { x: 'SomethingP', y: 3 },
      { x: 'SomethingQ', y: 4 },
      { x: 'SomethingR', y: 2 },
      { x: 'SomethingS', y: 1 },
      { x: 'SomethingT', y: 3 },
      { x: 'SomethingU', y: 4 },
      { x: 'SomethingV', y: 2 },
      { x: 'SomethingW', y: 1 },
      { x: 'SomethingX', y: 3 },]
  };

  let sort = null;

  let tooltipPie = function (x, y) {
    return x + ": " + y.toString();
  };

  console.log(data);
  return (
    
    <SizeMe
    monitorHeight
    refreshRate={32}
    render={({ size }) =>  
      
      <PieChart
        data={data}
        width={size.width}
        height={props.y * 100 + (props.y-1) * 10}
        margin={{ top: 10, bottom: 30, left: 30, right: 10 }}
        tooltipOffset={{ top: 125, left: 120 }}
        tooltipHtml={tooltipPie}
        tooltipMode={'fixed'}
        sort={sort}
      />
            
    }
    />
  );

  
}

export default PieChartContainer;

