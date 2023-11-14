import React from 'react';
import BarChart from './barChart';


export default function QuarterlyChart(props) {

    const total=props.data?.total_order_counts_current_year? props.data?.total_order_counts_current_year:props.data?.total_quantity_current_year

    // const quaterlylist = props.data?.total_order_counts_by_quarterly
    // console.log(quaterlylist);


    // const Contractorcount = props.data?.order_counts_by_quarter? Object.values(props.data?.order_counts_by_quarter?.Contractor)?.map((data)=>{return data}): Object.values(props.data?.quantity_by_quarter?.Contractor)?.map((data)=>{return data})

    // const Engineercount = props.data?.order_counts_by_quarter?Object.values(props.data?.order_counts_by_quarter?.Engineer)?.map((data)=>{return data}): Object.values(props.data?.quantity_by_quarter?.Engineer)?.map((data)=>{return data})

    // const Architectcount = props.data?.order_counts_by_quarter?Object.values(props.data?.order_counts_by_quarter?.Architect)?.map((data)=>{return data}): Object.values(props.data?.quantity_by_quarter?.Architect)?.map((data)=>{return data})

    
    const chartOptions = {
        series: [
            {
                name: 'Contactors',
                // data: Contractorcount,
                color: '#4169E1',
            },
            {
                name: 'Engineers',
                // data: Engineercount,
                color: '#191970',
            },
            {
                name: 'Architects',
                // data: Architectcount,
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
            categories: ['Qtr1,Qtr2,Qtr3,Qtr4'],
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
                <h4>{total} qty</h4>
            </div>
            <BarChart chartOptions={chartOptions} />
            <div className="card-body p-0">
                <div id="overiewChart" />
            </div>
        </>
    );
}



