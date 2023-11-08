import React, { useState,useEffect } from 'react';
import Select from 'react-select';
import BarChart from './barChart';
import MonthlyChart from './monthly';
import YearlyChart from './yearly';
import QuarterlyChart from './quarterly';
import { getmonthlyorders,getquarterlyorders,getyearlyOrders } from '../../../axiosHandle/dashboardHandle';


export default function DashboardOrderChart() {
    const[montlyorders,setMonthlyOrders]=useState(0)
    const[quarterlyorders,setQuarterlyOrders]=useState(0)
    const[orders,setYearlyOrders]=useState({})

    const options = [
        { cutoutPercentage: 50 },
        { value: 'monthly', label: 'Monthly' },
        { value: 'quarterly', label: 'Quarterly' },
        { value: 'yearly', label: 'Yearly' },
    ];

    const [selectedInterval, setSelectedInterval] = useState('quarterly');
    
    const handleChange = (selectedOption) => {
        setSelectedInterval(selectedOption.value);
    };

    useEffect(() => {
        getmonthlyorders()
            .then((data) => {
                setMonthlyOrders(data);
            })
            .catch((error) => {
                console.error('Error fetching :', error);
            });
    }, []);

    useEffect(() => {
        getquarterlyorders()
            .then((data) => {
                setQuarterlyOrders(data?.total_order_counts_current_year);
            })
            .catch((error) => {
                console.error('Error fetching :', error);
            });
    }, []);


    return (
        <div className="col-xl-6">
            <div className="card overflow-hidden">
                <div className="card-header border-0 pb-0 flex-wrap">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button className="btn btn-primary btn-sm" type="button" id="add-points-button">Orders</button>
                        <button className="btn btn-light btn-sm" type="button" id="add-points-button" style={{ marginLeft: 6 }}>Quantity</button>
                    </div>
                    <div>
                        <Select
                            options={options.slice(1)} // Exclude the cutoutPercentage option
                            value={options.find((option) => option.value === selectedInterval)}
                            onChange={handleChange}
                            className="custom-select" // Apply custom class
                        />
                    </div>
                </div>
                <h4 className="heading mb-2 mt-2" style={{ marginLeft: 15 }}>Total Number of Orders</h4>
                {selectedInterval === 'monthly' && <MonthlyChart data={montlyorders}/>}
                {selectedInterval === 'quarterly' && <QuarterlyChart data={quarterlyorders} />}
                {selectedInterval === 'yearly' && <YearlyChart />}
            </div>
        </div>
    );
}



