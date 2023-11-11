import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
import { updateOrderRequest,updateLeadRequest } from '../../../axiosHandle/dashboardHandle';

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

export default function LeadDetails({open, data, setOpen}) {

    const [showOffcanvas, setShowOffcanvas] = useState(open);

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
        setOpen(null)
    } 

    const handleorderrequest=async(req)=>{
        await updateOrderRequest(data.id,{action_type:req}).then((res)=>{
            if(res.status===200){
                window.location.reload()
            }})
        .catch((error) => {
            console.error('Error while fetching:', error);
            throw error;
          });            
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

        if(data.distributor){
             handleorderrequest(req);
            handleCloseOffcanvas()
        }
        else{
             handleleadrequest(req);
            handleCloseOffcanvas()
        }
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
                <span>Admin Status :</span><span style={{ marginLeft: 170, color: "blue" }} className="badge badge-primary light border-0">{data.admin_approval}</span><br></br>
                <span>Distributor Status :</span><span style={{ marginLeft: 150 }} className="badge badge-success light border-0 mt-2">{data.user_approval}</span><br></br>
                <span>Transaction ID :</span><span style={{ marginLeft: 140 }}>{data.transaction_id?data.transaction_id:data.referral_id}</span><br></br>
                <span>Date & Time :</span><span style={{ marginLeft: 150 }}>{new Date(data.updated_at).toLocaleDateString('en-US',{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}</span><br></br>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>{data.distributor? "Distributor Details":"Lead Details"}</h6>
                <span>Name :</span><span style={{ marginLeft: 235 }}>{data.distributor? data.distributor.name:data.name}</span><br></br>
                {data.distributor && <><span>Unique ID :</span><span style={{ marginLeft: 200 }}>{data?.distributor?.user_id}</span><br></br></>}
                <span>Address :</span><span style={{ marginLeft: 130 }}>{data?.distributor?.district?data?.distributor?.district: data.site_location}&nbsp;,&nbsp;{data?.distributor?.state && data?.distributor?.state}</span><br></br>
                <span>Mobile :</span><span style={{ marginLeft: 237 }}>{data?.distributor?.mobile? data?.distributor?.mobile: data.mobile_no}</span><br></br>
            </div>
            <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>{data.distributor? "Contractor Details":"Referrer Details"}</h6>
                <span>Name :</span><span style={{ marginLeft: 237 }}>{data?.user?.name}</span><br></br>
                <span>Unique ID :</span><span style={{ marginLeft: 200 }}>{data?.user?.user_id}</span><br></br>
                <span>Address :</span><span style={{ marginLeft: 130 }}>{data?.user?.district}&nbsp;,&nbsp;{data?.user?.state}</span><br></br>
                <span>Mobile :</span><span style={{ marginLeft: 237 }}>{data?.user?.mobile}</span><br></br>
            </div>
            <div>
                <h6 style={statusOffcanvas}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <div>
                            <span>Quantity</span>
                            <h5>{data.quantity?data.quantity:data.order}</h5>
                        </div>
                        <div className="divider-line"></div>
                        <div>
                            <span>Loyalty Points</span>
                            <h5>{data.points}</h5>
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

