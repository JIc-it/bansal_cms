import React from 'react';
import BarChart from './barChart';


export default function MonthlyChart(props) {
   
    const monthlyvalues=props.data.total_order_counts_by_month ? Object.values(props.data?.total_order_counts_by_month):  Object.values(props.data?.total_quantity_current_year)
    const reduceallmonthdatas=monthlyvalues.reduce((total,acc)=>total+acc,0)  

    const getAbbreviatedMonth = (numericMonth) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const index = parseInt(numericMonth, 10) - 1;
        return months[index];
      };

    let arraymonth=[]

    props.data.total_order_counts_by_month ? Object.keys(props.data.total_order_counts_by_month)?.map((dat) => {return arraymonth.push([getAbbreviatedMonth(dat)])}) 
    : Object?.keys(props.data?.total_quantity_current_year)?.map((dat) =>  {return arraymonth.push([getAbbreviatedMonth(dat)])})


    const Contractorcount = props.data?.order_counts_by_month?
    props.data?.order_counts_by_month.Contractor?.map((data)=>data.count): props.data?.quantity_by_month.Contractor?.map((data)=>data.total_quantity);

    const Engineercount = props.data?.order_counts_by_month?
    props.data?.order_counts_by_month.Engineer?.map((data)=>data.count): props.data?.quantity_by_month.Engineer?.map((data)=>data.total_quantity);

    const Architectcount = props.data?.order_counts_by_month?
    props.data?.order_counts_by_month.Architect?.map((data)=>data.count): props.data?.quantity_by_month.Architect?.map((data)=>data.total_quantity);


    


      

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
            categories: arraymonth,
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val ;
                },
            },
        },
    };

    return (
        <>
            <div style={{ marginLeft: 16, marginTop: 10 }}>
                <h4>{reduceallmonthdatas}</h4>
            </div>
            <BarChart chartOptions={chartOptions} />
            <div className="card-body p-0">
                <div id="overiewChart" />
            </div>
        </>
    );
}



