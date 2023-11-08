import React, { useState } from 'react';
import BarChart from './barChart';


export default function QuarterlyChart(props) {
    const chartOptions = {
        series: [
            {
                name: 'Contactors',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 21, 30],
                color: '#4169E1',
            },
            {
                name: 'Engineers',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 100, 12],
                color: '#191970',
            },
            {
                name: 'Architects',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 10, 57],
                color: '#2E8B57',
            },
        ],
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return '$ ' + val + ' thousands';
                },
            },
        },
    };

    return (
        <>
            <div style={{ marginLeft: 16, marginTop: 10 }}>
                <h4>{props.data} qty</h4>
            </div>
            <BarChart chartOptions={chartOptions} />
            <div className="card-body p-0">
                <div id="overiewChart" />
            </div>
        </>
    );
}



