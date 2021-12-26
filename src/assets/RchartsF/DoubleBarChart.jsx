// import React from 'react'
// import ReactECharts from 'echarts-for-react';
// const DoubleBarChart = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default DoubleBarChart

import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'



const DoubleBarChart = (props) => {
  return (
    <div style={{height:"100%"}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={props.pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip cursor={{fill: '#775ABA'}} />
          {/* <Legend /> */}
          <Bar dataKey="MutualFunds" fill="#C4C4C4" />
          <Bar dataKey="BerryWise" fill="#0B47F2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DoubleBarChart

// export default class DoubleBarChart extends PureComponent {
//   // static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

//   render() {
//     return (

//     );
//   }
// }
