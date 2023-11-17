import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState, useEffect } from 'react';

const offcanvasStyle = {
    width: '365px',
    height: '145px',
    backgroundColor: 'lightgray',
    display: 'flex',
    marginLeft: 18,
    marginTop: 20,
    flexDirection: 'column',
};

const statusOffcanvas = {
    width: '365px',
    height: '80px',
    marginLeft: 18,
    marginTop: 30,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
};

export default function OrderDetails({ data, open, setOpen }) {

    const [order_data, setOrderData] = useState({
        transaction_id: '',
    });

    useEffect(() => {
        setOrderData({
            ...order_data,
            transaction_id: data.transaction_id,
        });
    }, [data.transaction_id]);

    const [showOffcanvas, setShowOffcanvas] = useState(open);

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
        setOrderData({
            ...order_data,
            transaction_id: '',
        });
        setOpen(null)
    }


    return (
        <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" style={{ overflow: 'auto' }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <div style={offcanvasStyle}>
                <h6 style={{ marginLeft: 140, marginTop: 30, marginBottom: 30, fontSize: 60 }}>SA</h6>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>Transaction Details</h6>
                <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 24 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
                        <span>Admin Status :</span>
                        <span style={{ marginLeft: 200, color: "blue" }} className="badge badge-primary light border-0">{data.admin_approval}</span><br></br>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
                        <span>Distributor Status :</span>
                        <span style={{ marginLeft: 180 }} className="badge badge-success light border-0">{data.user_approval}</span><br></br>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
                        <span>Transaction ID :</span>
                        <span style={{ marginLeft: 100 }}>{order_data.transaction_id}</span><br></br>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 18 }}>
                        <span>Date & Time :</span>
                        <span style={{ marginLeft: 150 }}>{new Date(data.updated_at).toLocaleString("es-cl", { hour12: true })}</span><br></br>
                    </div>
                    {/* <span>Date & Time :</span><span style={{ marginLeft: 150 }}>05 AUG 2023, 6:00 PM</span><br></br> */}
                </div>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>Distributor Details</h6>
                <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 24 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span>Name:</span>
                        <span>{data?.distributor?.name}</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span>Unique ID:</span>
                        <span>{data?.distributor?.user_id}</span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span>Address:</span>
                        <span>
                            {data?.distributor?.district}
                            <span style={{ marginLeft: 10 }}>{data?.distributor?.state}</span>
                        </span>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span>Mobile:</span>
                        <span>{data?.distributor?.mobile}</span>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>Contractor Details</h6>
                <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span>Name :</span>
                <span style={{ marginLeft: 137 }}>{data?.user?.name}</span><br></br>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span>Unique ID :</span>
                <span style={{ marginLeft: 150 }}>{data?.user?.user_id}</span><br></br>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span>Address :</span>
                <span style={{ marginLeft: 180 }}>{data?.user?.district}<span style={{ marginLeft: 175 }}>{data?.user?.state}</span></span><br></br>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span>Mobile :</span>
                <span style={{ marginLeft: 150 }}>{data?.user?.mobile}</span><br></br>
                </div>
                </div>           
            </div>
            <div>
                <h6 style={statusOffcanvas}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <span>Quantity</span>
                            <h5>{data.quantity}</h5>
                        </div>
                        <div className="divider-line"></div>
                        <div>
                            <span>Loyalty Points</span>
                            <h5>{data.points}</h5>
                        </div>
                    </div></h6>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', marginLeft: '13px', marginRight: '10px' }}>
                    <button className="btn btn-success" style={{ flex: 1, margin: '0 5px', width: 'calc(50% - 5px)' }}>Accept</button>
                    <button className="btn btn-danger" style={{ flex: 1, margin: '0 5px', width: 'calc(50% - 5px)' }}>Reject</button>
                </div>
            </div>
        </Offcanvas>
    );
}

