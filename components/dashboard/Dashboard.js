import { Pie, PieChart, Tooltip } from "recharts";

const Dashboard = ({ brands }) => {
  return (
    <PieChart width={500} height={300}>
      <Pie
        data={brands}
        dataKey="totalItems"
        nameKey="brand"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#82ca9d"
      />
      <Tooltip />
    </PieChart>
  );
};

export default Dashboard;
