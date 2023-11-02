// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const closeButtonStyle = {
    alignSelf: 'flex',
};

const offcanvasStyle = {
    width: '365px',
    height: '145px',
    backgroundColor: 'lightgray',
    display: 'flex',
    marginLeft: 18,
    marginTop: 20,
    flexDirection: 'column',
};

export default function ViewReward({open, data, setOpen}) {

    const [showOffcanvas, setShowOffcanvas] = useState(open);

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
        setOpen(null)
    }

    return (
        <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <div style={offcanvasStyle}>
                <h6 style={{ marginLeft: 140, marginTop: 30, fontSize: 60 }}>SA</h6>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>Transaction Details</h6>
                <span>Status :</span><br></br>
                <span>Transaction ID :</span><span style={{ marginLeft: 190 }}>S455654663</span><br></br>
                <span>Date & Time :</span><span style={{ marginLeft: 150 }}>05 AUG 2023, 6:00 PM</span><br></br>
                <span>ID Type :</span><span style={{ marginLeft: 205 }}>Aadhar</span><button style={{ backgroundColor: "blue" }} className='btn btn-dark btn-sm ms-2'>View</button><br></br>
                <span>ID Number :</span><span style={{ marginLeft: 200 }}>545958785236</span><br></br>
                <span>Address :</span><span style={{ marginLeft: 130 }}>127, KANCHAN VIHAR COLONY, <span style={{ marginLeft: 175 }}>NIRANJANPUR ROAD INDORE MP</span></span><br></br>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>Buyer Details</h6>
                <span>Name :</span><span style={{ marginLeft: 235 }}>Pratibha Seth</span><br></br>
                <span>Unique ID :</span><span style={{ marginLeft: 250 }}>566565</span><br></br>
                <span>Mobile :</span><span style={{ marginLeft: 237 }}>9899959595</span><br></br>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>Reward Details</h6>
                <span>Name :</span><span style={{ marginLeft: 237 }}>Mixer Grinder</span><br></br>
                <span>Product ID :</span><span style={{ marginLeft: 244 }}>A59859</span><br></br>
            </div>
        </Offcanvas>
    );
}
