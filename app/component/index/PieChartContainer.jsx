import React from "react";
import { PieChart } from "react-d3-components";

function PieChartContainer() {
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
    <PieChart
      data={data}
      width={400}
      height={400}
      margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
      tooltipOffset={{ top: 125, left: 200 }}
      tooltipHtml={tooltipPie}
      tooltipMode={'fixed'}
      sort={sort}
    />
  );
}
export default PieChartContainer;

