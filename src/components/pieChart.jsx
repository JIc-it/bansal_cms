// Piechart.jsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = ({reward_name,reward_points}) => {
  
  const options = {
    labels:reward_name,
    colors: ['#4169E1', '#191970', '#2E8B57', '#FFA500', '#FF6347'],
    chart: {
      type: 'donut',
      height: 350,
    },
    dataLabels: {
      enabled: false, // Set to false to remove percentage labels
    },
  };

  const series = reward_points;
  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default PieChart;
