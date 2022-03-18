import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 100 },
  { name: "Group C", value: 300 }
];
const COLORS = ["#2ED47A", "#F7685B", "#FFB946"];

export default function PieGraph() {
  return (
<ResponsiveContainer width="80%" height={250}>
    <PieChart width={220} height={220}>
     <text x={105} y={120}  fontSize="56px" textAnchor="middle" fill="#2ED47A">
        60%
      </text>
      <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={90}
        outerRadius={100}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </ResponsiveContainer>
  );
}
