import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import { updateLeadRequest } from '../../../axiosHandle/dashboardHandle';

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




export default function LeadDetails({ open, data, setOpen }) {
    const [showOffcanvas, setShowOffcanvas] = useState(open);
    {console.log(data.id)}
    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
        setOpen(null)
    }

    const handleleadrequest=async(req)=>{
        await updateLeadRequest(data.id,{action_type:req}).then((res)=>{
            if(res.status===200){
                window.location.reload()
            }})
        .catch((error) => {
            console.error('Error while fetching:', error);
            throw error;
          });           
    }

    const handlerequest=(req)=>{

             handleleadrequest(req);
            handleCloseOffcanvas()
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
                <span>Admin Status :</span><span style={{ marginLeft: 190, color: "blue" }} className="badge badge-primary light border-0">{data.admin_approval}</span><br></br>
                <span>Distributor Status :</span><span style={{ marginLeft: 168 }} className="badge badge-success light border-0">{data.user_approval}</span><br></br>
                <span>Transaction ID :</span><span style={{ marginLeft: 190 }}>{data.transaction_id}</span><br></br>
                <span>Date & Time :</span><span style={{ marginLeft: 150 }}>{new Date(data.updated_at).toLocaleDateString('en-US',{day:"2-digit",month:"short",year:"2-digit",hour:"2-digit",minute:"2-digit"})}</span><br></br>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>Lead Details</h6>
                <span>Name :</span><span style={{ marginLeft: 235 }}>{data?.name}</span><br></br>
                <span>Mobile :</span><span style={{ marginLeft: 237 }}>{data.mobile_no}</span><br></br>
                <span>Site Location :</span><span style={{ marginLeft: 70 }}>{data.site_location}<span style={{ marginLeft: 175 }}></span></span><br></br>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>Referrer Details</h6>
                <span>Name :</span><span style={{ marginLeft: 237 }}>{data?.user?.name}</span><br></br>
                <span>Unique ID :</span><span style={{ marginLeft: 216 }}>{data.user?.user_id}</span><br></br>
                <span>Location :</span><span style={{ marginLeft: 200 }}>{data?.user?.district} &nbsp;,&nbsp;{data?.user?.state}</span><br></br>
                <span>Mobile :</span><span style={{ marginLeft: 237 }}>{data.user?.mobile}</span><br></br>
            </div>
            <div>
                <h6 style={statusOffcanvas}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <div>
                            <span>Quantity</span>
                            <h5>{data.order} Tons</h5>
                        </div>
                        <div className="divider-line"></div>
                        <div>
                            <span>Loyalty Points</span>
                            <h5>{data.points} Pts</h5>
                        </div>
                    </div></h6>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', marginLeft: '13px', marginRight: '10px' }}>
                    <button className="btn btn-success" style={{ flex: 1, margin: '0 5px', width: 'calc(50% - 5px)' }} onClick={()=>{handlerequest("accept")}}>Accept</button>
                    <button className="btn btn-danger" style={{ flex: 1, margin: '0 5px', width: 'calc(50% - 5px)' }} onClick={()=>{handlerequest("reject")}}>Reject</button>
                </div>
            </div>
        </Offcanvas>
    );
}

