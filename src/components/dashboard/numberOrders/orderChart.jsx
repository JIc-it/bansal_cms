import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import BarChart from './barChart';
import MonthlyChart from './monthly';
import YearlyChart from './yearly';
import QuarterlyChart from './quarterly';
import { getmonthlyorders, getquarterlyorders, getyearlyOrders, getmonthlyquantity, getquarterlyquantity, getyearlyquantity } from '../../../axiosHandle/dashboardHandle';


export default function DashboardOrderChart() {
    const [montlyorders, setMonthlyOrders] = useState(null)
    const [quarterlyorders, setQuarterlyOrders] = useState(null)
    const [yearlyorders, setYearlyOrders] = useState(null)
    const [montlyquantity, setMonthlyQuantity] = useState(null)
    const [quarterlyquantity, setQuarterlyQuantity] = useState(null)
    const [yearlyQuantity, setYearlyQuantity] = useState(null)

    const options = [
        { cutoutPercentage: 50 },
        { value: 'monthly', label: 'Monthly' },
        { value: 'quarterly', label: 'Quarterly' },
        { value: 'yearly', label: 'Yearly' },
    ];

    const [selectedInterval, setSelectedInterval] = useState('quarterly');
    const [selectedtype, setSelectedType] = useState('orders');

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
                setQuarterlyOrders(data);
            })
            .catch((error) => {
                console.error('Error fetching :', error);
            });
    }, []);

    useEffect(() => {
        getyearlyOrders()
            .then((data) => {
                setYearlyOrders(data);
            })
            .catch((error) => {
                console.error('Error fetching :', error);
            });
    }, []);

    useEffect(() => {
        getmonthlyquantity()
            .then((data) => {
                setMonthlyQuantity(data);
                // console.log(data.total_quantity_current_year)
            })
            .catch((error) => {
                console.error('Error fetching :', error);
            });
    }, []);

    useEffect(() => {
        getquarterlyquantity()
            .then((data) => {
                setQuarterlyQuantity(data);
            })
            .catch((error) => {
                console.error('Error fetching :', error);
            });
    }, []);

    useEffect(() => {
        getyearlyquantity()
            .then((data) => {
                setYearlyQuantity(data);
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
                        <button className={selectedtype === "orders" ? "btn btn-primary btn-sm" : "btn btn-light btn-sm"} type="button" id="add-points-button" onClick={() => setSelectedType("orders")}>Orders</button>
                        <button className={selectedtype === "quantity" ? "btn btn-primary btn-sm" : "btn btn-light btn-sm"} type="button" id="add-points-button" style={{ marginLeft: 6 }} onClick={() => setSelectedType("quantity")}>Quantity</button>
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
                {selectedtype === "orders" ?
                    <>
                        <h4 className="heading mb-2 mt-2" style={{ marginLeft: 15 }}>Total Number of Orders</h4>
                        {selectedInterval === 'monthly' && <MonthlyChart data={montlyorders} />}
                        {selectedInterval === 'quarterly' && <QuarterlyChart data={quarterlyorders} />}
                        {selectedInterval === 'yearly' && <YearlyChart data={yearlyorders}/>}
                    </> :
                    <>
                        <h4 className="heading mb-2 mt-2" style={{ marginLeft: 15 }}>Total Quantity Sold</h4>
                        {selectedInterval === 'monthly' && <MonthlyChart data={montlyquantity} />}
                        {selectedInterval === 'quarterly' && <QuarterlyChart data={quarterlyquantity} />}
                        {selectedInterval === 'yearly' && <YearlyChart data={yearlyQuantity}/>}
                    </>
                }
            </div>
        </div>
    );
}



