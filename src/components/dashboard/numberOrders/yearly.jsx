import React from 'react';
import BarChart from './barChart';


export default function YearlyChart(props) {
    
    
    const yearslist = props.data.total_order_counts_by_year ? Object.keys(props.data.total_order_counts_by_year).map((dat) => dat) : Object.keys(props.data.total_quantity_by_year).map((dat) => dat)

    const Contractorcount = props.data.order_counts_by_year ? props.data.order_counts_by_year.Contractor.map((dat) => dat.count) :
        props.data.quantity_by_year.Contractor.map((dat) => dat.total_quantity)

    const Engineercount = props.data.order_counts_by_year ? props.data.order_counts_by_year.Engineer.map((dat) => dat.count) :
        props.data.quantity_by_year.Engineer.map((dat) => dat.total_quantity)

    const Architectcount = props.data.order_counts_by_year ? props.data.order_counts_by_year.Architect.map((dat) => dat.count) :
        props.data.quantity_by_year.Architect.map((dat) => dat.total_quantity)

    const chartOptions = {
        series: [
            {
                name: 'Contactors',
                data: Contractorcount,
                color: '#4169E1',
            },
            {
                name: 'Engineers',
                data: Engineercount,
                color: '#191970',
            },
            {
                name: 'Architects',
                data: Architectcount,
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
            categories: yearslist,
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
                <h4>{6000 } yrl</h4>
            </div>
            <BarChart chartOptions={chartOptions} />
            <div className="card-body p-0">
                <div id="overiewChart" />
            </div>
        </>
    );
}



