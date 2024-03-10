import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const colors = {
  Clients: "green",
  Chillers: "blue",
  CommonArea: "purple",
  Others: "orange",
};

const ConsumptionChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        {Object.keys(colors).map((key) => (
          <linearGradient key={key} id={key} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors[key]} stopOpacity={0.8} />
            <stop offset="95%" stopColor={colors[key]} stopOpacity={0} />
          </linearGradient>
        ))}
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {Object.keys(colors).map((key) => (
        <Area
          key={key}
          type="monotone"
          dataKey={key}
          stroke={colors[key]}
          fillOpacity={1}
          fill={`url(#${key})`}
        />
      ))}
    </AreaChart>
  </ResponsiveContainer>
);

export default ConsumptionChart;
