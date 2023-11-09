// Piechart.jsx
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = ({data}) => {
  // const redeemedrewardname=data?.redeemed_rewards.map(data=>data?.reward_name);

  const options = {
    labels: ['Mixer Grinder', 'Rice Cooker', '10 gm silver coin', 'Milton Flask', 'Others'],
    // labels:redeemedrewardname,
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
  // const series = data?.redeemed_rewards?.map((datas)=> {return datas?.count});
  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
};

export default PieChart;
