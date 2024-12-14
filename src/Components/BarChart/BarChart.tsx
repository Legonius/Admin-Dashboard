import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue",
        data: [65, 59, 80, 81, 56, 77, 59],
        backgroundColor: "rgba(255, 192, 192,1)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barThickness: 30,
        maxBarThickness: 40,
      },
      {
        label: "Transactions",
        data: [20, 70, 35, 99, 11, 88, 72],
        backgroundColor: "rgba(100, 200, 300)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barThickness: 30,
        maxBarThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Revenue & Transactions",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: { color: "rgba(255,0,0,0.1)" },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
