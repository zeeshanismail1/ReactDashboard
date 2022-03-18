import React from 'react';
import { ResponsiveContainer, ComposedChart, Area,Line, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';
import styled from 'styled-components';

const data = [
  {
    name: '1 Dec',
    Task: 50,
  },
  {
    name: '8 Dec',
    Task: 100,
  },
  {
    name: '16 Dec',
    Task: 200,
  },
  {
    name: '31 Dec',
    Task: 150,
  },
  
];
const LineGraph = () => {
    return (
      <ResponsiveContainer  width="100%" height={250}>
        <ComposedChart
          width={365}
          height={176}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: -25,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id='rainGradient' x1="0" y1="0" x2="0" y2="1" >
              <stop offset="0%" stopColor="#109CF1" />
              <stop offset="100%" stopColor="rgba(16, 156, 241, 0)" stopOpacity={0.2}/>
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="10 15" stroke="#C4C4C4" />
          <XAxis padding={{ left: 20 }} dataKey="name"  axisLine={false} tickLine={false} fontSize="12px" color=' #4C5862'/>
          <YAxis axisLine={false} tickLine={false} fontSize="12px" color=' #4C5862'/>
          <Tooltip content={<CustomTooltip>145</CustomTooltip>} dataKey="Task" />
          <Line type="monotone" dataKey="Task" stroke="#109CF1"/>
          <Area type="monotone" dataKey="Task" stroke="#fff"  fill="url(#rainGradient)" opacity="0.5" Series="Blue"/>
        </ComposedChart>
      </ResponsiveContainer>
    );
  }

export const CustomTooltip = styled.div`
width: 46px;
height: 24px;
background: #192A3E;
opacity: 0.6;
border-radius: 15px;
color: #fff;
text-align: center;
`;

export default LineGraph
