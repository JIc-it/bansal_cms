// Piechart.jsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const options = {
    labels: ['Mixer Grinder', 'Rice Cooker', '10 gm silver coin', 'Milton Flask', 'Others'],
    colors: ['#4169E1', '#191970', '#2E8B57', '#FFA500', '#FF6347'],
    chart: {
      type: 'donut',
      height: 350,
    },
    dataLabels: {
      enabled: false, // Set to false to remove percentage labels
    },
  };

  const series = [44, 55, 41, 17, 15];

  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default PieChart;
