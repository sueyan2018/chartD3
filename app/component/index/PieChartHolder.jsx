import React,  { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, G2 } from 'bizcharts';
import DataSet from "@antv/data-set";
import { SizeMe } from 'react-sizeme';

class Labelline extends React.Component {
  render() {
    const { DataView } = DataSet;
    const data = [
      {
        item: "A",
        count: 40
      },
      {
        item: "B",
        count: 21
      },
      {
        item: "C",
        count: 17
      },
      {
        item: "D",
        count: 13
      },
      {
        item: "E",
        count: 9
      }
    ];
    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: "count",
      dimension: "item",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    };
    return (
        <SizeMe
        monitorHeight
        refreshRate={32}
        render={({ size }) =>  
            <div>
                <Chart
                width={size.width}
                height={this.props.y * 100 + (this.props.y-4) * 10} 
                data={dv} 
                scale={cols}              
                padding={[20, 30, 20, 20]}
               
                >
                <Coord type="theta" radius={0.75} />
                <Axis name="percent" />
                <Legend
                    position="right"
                    offsetY={-(this.props.y * 100 + (this.props.y-4) * 10) / 2 + 120}
                    offsetX={-50}
                />
                <Tooltip
                    showTitle={false}
                    itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                />
                <Geom
                    type="intervalStack"
                    position="percent"
                    color="item"
                    tooltip={[
                    "item*percent",
                    (item, percent) => {
                        percent = percent * 100 + "%";
                        return {
                        name: item,
                        value: percent
                        };
                    }
                    ]}
                    style={{
                    lineWidth: 1,
                    stroke: "#fff"
                    }}
                >
                    <Label
                    content="percent"
                    formatter={(val, item) => {
                        return item.point.item + ": " + val;
                    }}
                    />
                </Geom>
                </Chart>
            </div>
            }
            />
        );
    }
}

export default Labelline;

        