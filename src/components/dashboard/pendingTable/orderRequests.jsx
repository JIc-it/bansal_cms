import React, { useState, useEffect } from 'react';
import { getOrderRequest, getLeadRequest } from '../../../axiosHandle/dashboardHandle';
import OrderTable from './orderTable';
import LeadTable from './leadTable';

export default function PendingOrderRequests() {

    const [top_name, setTopName] = useState('Pending Order Requests');
    const active_btn = 'btn btn-primary btn-sm'
    const inactive_btn = 'btn btn-light btn-sm'
    const [order_btn, setOrderBtn] = useState(active_btn);
    const [lead_btn, setLeadBtn] = useState(inactive_btn);
    const [order_data, setOrderData] = useState(null);
    const [order_total, setOrderTotal] = useState(null);
    const [lead_data, setleadData] = useState(null);
    const [lead_total, setLeadTotal] = useState(null);
    const [active_table, setActiveTable] = useState('order');
    const [count_total, setCountTotal] = useState(0);


    useEffect(() => {
        getOrderRequest()
            .then((data) => {
                setOrderData(data.pending_orders);
                setOrderTotal(data.total_requests_count);
            })
            .catch((error) => {
                console.error('Error fetching order data:', error);
            });
    }, []);

    useEffect(() => {
        getLeadRequest()
            .then((data) => {
                setleadData(data.pending_leads);
                setLeadTotal(data.total_requests_count);
            })
            .catch((error) => {
                console.error('Error fetching lead data:', error);
            });
    }, []);

    const toggleTableData=(type)=>{
        if (type==='order'){
            setTopName("Pending Order Requests");
            setOrderBtn(active_btn);
            setLeadBtn(inactive_btn);
            setActiveTable('order');
            setCountTotal(order_total);
        }
        else {
            setTopName("Pending Lead Requests");
            setOrderBtn(inactive_btn);
            setLeadBtn(active_btn);
            setActiveTable('lead');
            setCountTotal(lead_total);
        }


    }

    return (
        <div className="col-xl-6">
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects task-table">
                        <div className="container-fluid">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button className={order_btn} type="button" onClick={() => toggleTableData('order')}>Orders</button>
                                <button className={lead_btn} type="button"  onClick={() => toggleTableData('lead')} style={{ marginLeft: 6 }}>Leads</button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                                <h5>{top_name}</h5>
                            </div>
                            <div style={{ marginLeft: 3 }}>
                                <h4>{count_total}</h4>
                            </div>
                        </div>
                        {active_table === 'order' && <OrderTable data={order_data} />}
                        {active_table === 'lead' && <LeadTable data={lead_data} />}
                        {/* <table id="list-tbl" class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Unique id</th>
                                    <th>Distributor id</th>
                                    <th>Quantity</th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                            {order_data && order_data.length > 0 ? (
                               order_data.slice(0, 5).map((order) => (
                                    <tr key={order.id}>
                                    <td><h6>{order.name}</h6></td>
                                    <td><h6>{order.transaction_id}</h6></td>
                                    <td><h6>{order.orderNumber}</h6></td>
                                    <td><h6>{order.quantity}</h6></td>
                                    <td>
                                        <button className="btn btn-primary">Submit</button>
                                    </td>
                                    </tr>
                                ))
                                ) : (
                                <tr>
                                    <td colSpan="5">No orders available</td>
                                </tr>
                                )}

                                

                            </tbody>
                        </table> */}
                    </div>
                </div>
            </div>
        </div>
    );
}



