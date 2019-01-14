import React,  { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
import DataSet from '@antv/data-set';
import { SizeMe } from 'react-sizeme';

class Series extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
        }
      }

  render() {
    const data = [
      {
        month: "Jan",
        Tokyo: 7.0,
        London: 3.9
      },
      {
        month: "Feb",
        Tokyo: 6.9,
        London: 4.2
      },
      {
        month: "Mar",
        Tokyo: 9.5,
        London: 5.7
      },
      {
        month: "Apr",
        Tokyo: 14.5,
        London: 8.5
      },
      {
        month: "May",
        Tokyo: 18.4,
        London: 11.9
      },
      {
        month: "Jun",
        Tokyo: 21.5,
        London: 15.2
      },
      {
        month: "Jul",
        Tokyo: 25.2,
        London: 17.0
      },
      {
        month: "Aug",
        Tokyo: 26.5,
        London: 16.6
      },
      {
        month: "Sep",
        Tokyo: 23.3,
        London: 14.2
      },
      {
        month: "Oct",
        Tokyo: 18.3,
        London: 10.3
      },
      {
        month: "Nov",
        Tokyo: 13.9,
        London: 6.6
      },
      {
        month: "Dec",
        Tokyo: 9.6,
        London: 4.8
      }
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["Tokyo", "London"],
      // 展开字段集
      key: "city",
      // key字段
      value: "temperature" // value字段
    });
    //console.log(dv);
    const cols = {
      month: {
        range: [0, 1]
      }
    };
    return (
        <SizeMe
          monitorHeight
          refreshRate={32}
          render={({ size }) =>  
            <div>
                <div>
                    <Chart 
                        width={size.width}
                        height={this.props.y * 100 + (this.props.y-4) * 10}
                        padding={'auto'} 
                        data={dv} 
                        scale={cols} 
                    >
                        <Legend />
                        <Axis name="month" />
                        <Axis
                            name="temperature"
                            label={{
                            formatter: val => `${val}°C`
                            }}
                        />
                        <Tooltip
                            crosshairs={{
                            type: "y"
                            }}
                        />
                        <Geom
                            type="line"
                            position="month*temperature"
                            size={2}
                            color={"city"}
                        />
                        <Geom
                            type="point"
                            position="month*temperature"
                            size={4}
                            shape={"circle"}
                            color={"city"}
                            style={{
                            stroke: "#fff",
                            lineWidth: 1
                            }}
                        />
                    </Chart>

                </div>
    
            </div>
                      
            }
            />
      );
  }
}

export default Series;