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
    const [lead_data, setLeadData] = useState(null);
    const [lead_total, setLeadTotal] = useState(null);
    const [active_table, setActiveTable] = useState('order');
    const [refetch,setRefetch]=useState(false)

    const handlerefetch=()=>{
        setRefetch(true);
    }

    useEffect(() => {
        getOrderRequest()
            .then((data) => {
                setOrderData(data.results);
                setOrderTotal(data.count);
                setRefetch(false)
            })
            .catch((error) => {
                console.error('Error fetching order data:', error);
            });
    }, [refetch]);

    useEffect(() => {
        getLeadRequest()
            .then((data) => {
                setLeadData(data.results);
                setLeadTotal(data.count);
                setRefetch(false)
            })
            .catch((error) => {
                console.error('Error fetching lead data:', error);
            });
    }, [refetch]);

    const toggleTableData = (type) => {
        if (type === 'order') {
            setTopName("Pending Order Requests");
            setOrderBtn(active_btn);
            setLeadBtn(inactive_btn);
            setActiveTable('order');
        } else {
            setTopName("Pending Lead Requests");
            setOrderBtn(inactive_btn);
            setLeadBtn(active_btn);
            setActiveTable('lead');
        }
    }

    return (
        <div className="col-xl-6">
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects task-table">
                        <div className="container-fluid">
                            <div style={{ display: 'flex' }}>
                                <button className={order_btn} type="button" onClick={() => toggleTableData('order')}>Orders</button>
                                <button className={lead_btn} type="button" onClick={() => toggleTableData('lead')} style={{ marginLeft: 6 }}>Leads</button>
                                {active_table === 'order' && <a href='/orderrequests' style={{ marginLeft: 380, color: 'blue', cursor: 'pointer' }}>View All</a>}
                                {active_table === 'lead' && <a href='/leadrequests' style={{ marginLeft: 380, color: 'blue', cursor: 'pointer' }}>View All</a>}
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                                <h5>{top_name}</h5>
                            </div>
                            <div style={{ marginLeft: 3 }}>
                                <h4>{active_table === 'order' ? order_total : lead_total}</h4>
                            </div>
                        </div>
                        {active_table === 'order' && <OrderTable data={order_data} handlerefetch={handlerefetch} isRefetch={refetch} setIsRefetch={setRefetch}/>}
                        {active_table === 'lead' && <LeadTable data={lead_data} handlerefetch={handlerefetch} isRefetch={refetch} setIsRefetch={setRefetch}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
