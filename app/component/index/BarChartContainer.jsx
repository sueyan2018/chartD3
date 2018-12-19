import React from "react";
import { BarChart } from "react-d3-components";
import { SizeMe } from 'react-sizeme';

function BarChartContainer() {
  let data = [
    {
      label: "somethingA",
      values: [
        { x: "A", y: 10 },
        { x: "B", y: 4 },
        { x: "C", y: 3 }
      ]
    }
  ];

  let data2 = [
    {
    label: 'somethingA',
    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    },
    {
    label: 'somethingB',
    values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
    },
    {
    label: 'somethingC',
    values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
    },
    {
      label: 'somethingD',
      values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
      },
];
  return (
    <SizeMe
          monitorHeight
          refreshRate={32}
          render={({ size }) =>
        <BarChart
          data={data}
          width={size.width}
          height={size.width}
          margin={{ top: 10, bottom: 30, left: 30, right: 10 }}
        />
      }
      />
  );

}
export default BarChartContainer;
