import React,{useEffect} from 'react';
import BarChart from './barChart';


export default function QuarterlyChart(props) {

    const orderobject=props?.data?.total_order_counts_by_quarterly
    const quantityobject=props?.data?.total_quantity_by_quarterly
    
    const ordervalues=orderobject &&  Object?.values(orderobject)
    const quantityvalues=quantityobject && Object?.values(quantityobject)

    const reduceallquarterlydatas=
    orderobject ? ordervalues?.reduce((total,acc)=>total+acc,0) 
    :quantityvalues?.reduce((total,acc)=>total+acc,0)
    
    
    let xaxis=[]
   
    const getFormattedQuarter = (quarterName) => {
        const parts = quarterName.split(" ");
        const quarterNumber = parts[1];
        return xaxis.push([`Qtr${quarterNumber}`]);
      };

      const orderquartersdata=props?.data?.order_counts_by_quarter
      const quantityquartersdata=props?.data?.quantity_by_quarter

    let contractorcounts=[]
    const contractorvalues=()=>{
        
            if(orderquartersdata) {
                Object.values(props?.data?.order_counts_by_quarter?.Contractor).map((value)=>{
                    contractorcounts.push(value)})
            }
            else if(quantityquartersdata){
                Object.values(props?.data?.quantity_by_quarter?.Contractor).map((value)=>{
                    contractorcounts.push(value)})
        }
    }

    let engineercounts=[]
    const engineervalues=()=>{
        
            if(orderquartersdata) {
                Object.values(props?.data?.order_counts_by_quarter?.Engineer).map((value)=>{
                    engineercounts.push(value)})
            }
            else if(quantityquartersdata){
                Object.values(props?.data?.quantity_by_quarter?.Engineer).map((value)=>{
                    engineercounts.push(value)})
        }
    }


    let architectcounts=[]
    const architectvalues=()=>{
        
            if(orderquartersdata) {
                Object.values(props?.data?.order_counts_by_quarter?.Architect).map((value)=>{
                    architectcounts.push(value)})
            }
            else if(quantityquartersdata){
                Object.values(props?.data?.quantity_by_quarter?.Architect).map((value)=>{
                    architectcounts.push(value)})
        }
    }
    engineervalues();contractorvalues();architectvalues()

      const OrderQtrlist=orderobject && Object.keys(orderobject).map((data)=>getFormattedQuarter(data))
      const QtyQtrlist=quantityobject && Object.keys(quantityobject).map((data)=>getFormattedQuarter(data))
      const xaxisdata=orderobject? OrderQtrlist: QtyQtrlist

    
    const chartOptions = {
        series: [
            {
                name: 'Contactors',
                data: contractorcounts,
                color: '#4169E1',
            },
            {
                name: 'Engineers',
                data: engineercounts,
                color: '#191970',
            },
            {
                name: 'Architects',
                data: architectcounts,
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
            categories: xaxis,
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return + val;
                },
            },
        },
    };

    return (
        <>
            <div style={{ marginLeft: 16, marginTop: 10 }}>
                <h4>{reduceallquarterlydatas}</h4>
            </div>
            <BarChart chartOptions={chartOptions} />
            <div className="card-body p-0">
                <div id="overiewChart" />
            </div>
        </>
    );
}



