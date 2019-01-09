import React,  { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape, G2 } from 'bizcharts';
import DataSet from '@antv/data-set';
import data from './bubble.json'
import { SizeMe } from 'react-sizeme';

const cols={
  LifeExpectancy: {
    alias: '人均寿命（年）'
  },
  Population: {
    type: 'pow',
    alias: '人口总数'
  },
  GDP: {
    alias: 'GDP($)'
  },
  Country: {
    alias: '国家/地区'
  }
};

const colorMap = {
  'Asia': G2.Global.colors[0],
  'Americas': G2.Global.colors[1],
  'Europe': G2.Global.colors[2],
  'Oceania': G2.Global.colors[3]
};

export default class PointC extends Component {
  
  render() {
    return (
        <SizeMe
        monitorHeight
        refreshRate={32}
        render={({ size }) =>  
            <div>  
                <Chart 
                width={size.width}
                height={this.props.y * 100 + (this.props.y-4) * 10} 
                padding={'auto'}  
                data={data} 
                scale={cols}>
                    <Tooltip showTitle={false} />
                    <Axis name='GDP' label={{
                    formatter: (value) => {
                        return (value / 1000).toFixed(0) + 'k';
                    } // 格式化坐标轴的显示
                    }} />
                    <Axis name='LifeExpectancy'/>
                    <Legend 
                    position="bottom"
                    //offsetY={-(this.props.y * 100 + (this.props.y-4) * 10) / 2 + 120}
                    //offsetX={100}
                    //reversed 
                    />
                    <Geom type='point' position="GDP*LifeExpectancy" color={['continent', val => {
                    return colorMap[val];
                    }]} tooltip='Country*Population*GDP*LifeExpectancy' opacity={0.65} shape="circle" size={['Population', [ 4, 65 ]]} style={['continent', {
                        lineWidth: 1,
                        strokeOpacity: 1,
                        fillOpacity: 0.3,
                        opacity: 0.65,
                        stroke: val => {
                        return colorMap[val];
                        }
                    }]}
                    />
                </Chart>
            </div>
        }
        />
    );
  }
}
