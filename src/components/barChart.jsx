import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = ({ chartOptions }) => {
  return (
    <div>
      <ReactApexChart options={chartOptions} series={chartOptions.series} type="bar" height={chartOptions.chart.height} />
    </div>
  );
};

export default BarChart;
