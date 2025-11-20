import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  { month: "Jan", profit: 1000 },
  { month: "Feb", profit: 1500 },
  { month: "Mar", profit: 2000 },
];

function ProfitChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
    </LineChart>
  );
}

export default ProfitChart;
