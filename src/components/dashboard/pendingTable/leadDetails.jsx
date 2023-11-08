import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';

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




export default function LeadDetails(props) {

    const [showOffcanvas, setShowOffcanvas] = useState(props.open);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);

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
                <span>Admin Status :</span><span style={{ marginLeft: 200, color: "blue" }} className="badge badge-primary light border-0">{props.data.admin_approval}</span><br></br>
                <span>Distributor Status :</span><span style={{ marginLeft: 168 }} className="badge badge-success light border-0">{props.data.user_approval}</span><br></br>
                <span>Transaction ID :</span><span style={{ marginLeft: 190 }}>{props.data.transaction_id}</span><br></br>
                <span>Date & Time :</span><span style={{ marginLeft: 150 }}>05 AUG 2023, 6:00 PM</span><br></br>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>Distributor Details</h6>
                <span>Name :</span><span style={{ marginLeft: 235 }}>{props.data?.distributor?.name}</span><br></br>
                <span>Unique ID :</span><span style={{ marginLeft: 250 }}>{props.data?.distributor?.user_id}</span><br></br>
                <span>Address :</span><span style={{ marginLeft: 130 }}>{props.data?.distributor?.district},{props.data?.distributor?.state}<span style={{ marginLeft: 175 }}>NIRANJANPUR ROAD INDORE MP</span></span><br></br>
                <span>Mobile :</span><span style={{ marginLeft: 237 }}>{props.data?.distributor?.mobile}</span><br></br>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>Contractor Details</h6>
                <span>Name :</span><span style={{ marginLeft: 237 }}>{props.data?.user?.name}</span><br></br>
                <span>Unique ID :</span><span style={{ marginLeft: 250 }}>{props.data?.user?.user_id}</span><br></br>
                <span>Address :</span><span style={{ marginLeft: 130 }}>{props.data?.user?.district},{props.data?.user?.state}<span style={{ marginLeft: 175 }}>NIRANJANPUR ROAD INDORE MP</span></span><br></br>
                <span>Mobile :</span><span style={{ marginLeft: 237 }}>{props.data?.user?.mobile}</span><br></br>
            </div>
            <div>
                <h6 style={statusOffcanvas}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <span>Quantity</span>
                            <h5>{props.data.quantity}</h5>
                        </div>
                        <div className="divider-line"></div>
                        <div>
                            <span>Loyalty Points</span>
                            <h5>{props.data.points}</h5>
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

