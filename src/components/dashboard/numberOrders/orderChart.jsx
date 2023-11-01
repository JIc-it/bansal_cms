import React, { useState } from 'react';
import Select from 'react-select';
import BarChart from './barChart';
import MonthlyChart from './monthly';
import YearlyChart from './yearly';
import QuarterlyChart from './quarterly';


export default function DashboardOrderChart() {
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
                {selectedInterval === 'monthly' && <MonthlyChart />}
                {selectedInterval === 'quarterly' && <QuarterlyChart />}
                {selectedInterval === 'yearly' && <YearlyChart />}
            </div>
        </div>
    );
}



