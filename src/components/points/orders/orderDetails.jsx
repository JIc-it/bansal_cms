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

export default function OrderDetails({data, open, setOpen}) {
     console.log("OrderDetails data",data.accepted_by)
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
            transaction_id:'',
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
            <br></br>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                <h6>Transaction Details</h6>
                {data?.accepted_by?.role==='Admin'?
                <>
                 <span>Admin Status :</span><span style={{ float: 'inline-end',color: "blue", padding:2, position: 'relative', bottom:5  }} className="badge badge-primary light border-0">{data.admin_approval}</span><br></br>
                </>:
                <>
                 <span>Sales POC Status :</span><span style={{ float: 'inline-end', position:'relative', padding:2 }} className="badge badge-primary light border-0">{data.admin_approval}</span><br></br> 
                </>
                 

                }
                
                <span>Distributor Status :</span><span style={{ float: 'inline-end',position:'relative', padding:0, left:65 }} className="badge badge-success light border-0">{data.user_approval}</span><br></br>
                <span>Transaction ID :</span><span style={{ float: 'inline-end' }}>{order_data.transaction_id}</span><br></br>
                <span>Date & Time :</span><span style={{ float: 'inline-end' }}>{new Date(data.updated_at).toLocaleString("es-cl",{hour12:true})}</span><br></br>
                <span>Accepted By :</span><span style={{ float: 'inline-end' }}>{data?.accepted_by?.email}</span><br></br>
            </div>
            <br></br>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                <h6>Distributor Details</h6>
                <span>Name :</span><span style={{ float: 'inline-end' }}>{data?.distributor?.name}</span><br></br>
                <span>Unique ID :</span><span style={{ float: 'inline-end' }}>{data?.distributor?.user_id}</span><br></br>
                <span>Address :</span><span style={{ float: 'inline-end' }}>{data?.distributor?.district},<span style={{ marginLeft: 175 }}>{data?.distributor?.state}</span></span><br></br>
                <span>Mobile :</span><span style={{ float: 'inline-end' }}>{data?.distributor?.mobile}</span><br></br>
            </div>
            <br></br>
            <div style={{ marginLeft: 15, marginRight: 15 }}>
                <h6>Contractor Details</h6>
                <span>Name :</span><span style={{ float: 'inline-end' }}>{data?.user?.name}</span><br></br>
                <span>Unique ID :</span><span style={{ float: 'inline-end' }}>{data?.user?.user_id}</span><br></br>
                <span>Address :</span><span style={{ float: 'inline-end' }}>{data?.user?.district}, {data?.user?.state}</span><br></br>
                <span>Mobile :</span><span style={{ float: 'inline-end' }}>{data?.user?.mobile}</span><br></br>
                <span><b>Comment</b> :</span><span style={{ float: 'inline-end' }}>{data.comments}</span><br></br>
            </div>
            <div>
                <h6 style={statusOffcanvas}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
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
            </div>
        </Offcanvas>
    );
}

