import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useEffect, useState } from 'react';
import { NotificationDelete, NotificationList } from '../../axiosHandle/userHandle';

// import { updateOrderRequest,updateLeadRequest } from '../../../axiosHandle/dashboardHandle';

const offcanvasStyle = {
    width: '365px',
    height: '145px',
    backgroundColor: 'lightgray',
    display: 'flex',
    marginLeft: 18,
    marginTop: 20,
    flexDirection: 'column',
};
const notificationsHead={
    width: '122px',
    height: '28px',
    fontSize:19.2,
    marginLeft:20
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

export default function NotificationsOpen({open, setOpen}) {
    const [dataList,setDataList]=useState([])
    const [showOffcanvas, setShowOffcanvas] = useState(open);
    const [message,setMessage]=useState('')
    const [count,setCount]=useState(0)
   
    console.log("count message",dataList)
 console.log(showOffcanvas,"showOffcanvas")
    const handleCloseOffcanvas = () => {
        NotificationDelete().then((data)=>{
         console.log("NotificationDelete",data)  
        })
        setShowOffcanvas(false);
         setOpen(null)
    } 
   
      
    const handleorderrequest=async(req)=>{
        // await updateOrderRequest(data.id,{action_type:req}).then((res)=>{
        //     if(res.status===200){
        //         window.location.reload()
        //     }})
        // .catch((error) => {
        //     console.error('Error while fetching:', error);
        //     throw error;
        //   });            
    }

    const handleleadrequest=async(req)=>{
        // await updateLeadRequest(data.id,{action_type:req}).then((res)=>{
        //     if(res.status===200){
        //         window.location.reload()
        //     }})
        // .catch((error) => {
        //     console.error('Error while fetching:', error);
        //     throw error;
        //   });           
    }
    // const handlerequest=(req)=>{

    //     if(data.distributor){
    //          handleorderrequest(req);
    //         handleCloseOffcanvas()
    //     }
    //     else{
    //          handleleadrequest(req);
    //         handleCloseOffcanvas()
    //     }
    // }
    useEffect(() => {
            NotificationList()
                .then((data) => {
                    console.log("data", data)
                    setCount(data.count);
                    setMessage(data.results.message);
                    setDataList(data.results);
                })
                .catch((error) => {
                    console.error('Error fetching profile:', error);
                });
        
    }, []);
    return (
        <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" style={{ overflow: 'auto' }}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <div style={notificationsHead}>
                <h6 style={{ fontSize: 19.2,fontWeight:500,fontFamily:'Poppins-Regular' }}>Notifications</h6>
            </div>
            {count===0 ?
             <div style={{ marginTop: 10, marginLeft: 20 }}>
                <p style={{fontSize: 12,fontFamily:'Poppins',fontWeight:'400',fontSize:16,color:'rgba(15, 15, 15, 1)'}}>No New Notifications</p>
             </div>:
             <div>
                    {dataList?.map((data)=>
              <div>
                {console.log('mapping',data.message)}
                <span style={{fontFamily:'Poppins',fontWeight:'400',fontSize:12,color:'rgba(15, 15, 15, 1)'}}>{data.message}</span>
              </div>
           )}
             </div>
            }
           
            {/* <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>{data.distributor? "Distributor Details":"Lead Details"}</h6>
                <span>Name :</span><span style={{ marginLeft: 235 }}>{data.distributor? data.distributor.name:data.name}</span><br></br>
                {data.distributor && <><span>Unique ID :</span><span style={{ marginLeft: 200 }}>{data?.distributor?.user_id}</span><br></br></>}
                <span>Address :</span><span style={{ marginLeft: 130 }}>{data?.distributor?.district?data?.distributor?.district: data.site_location}&nbsp;,&nbsp;{data?.distributor?.state && data?.distributor?.state}</span><br></br>
                <span>Mobile :</span><span style={{ marginLeft: 237 }}>{data?.distributor?.mobile? data?.distributor?.mobile: data.mobile_no}</span><br></br>
            </div> */}
            {/* <div style={{ marginTop: 10, marginLeft: 20 }}>
                <h6>{data.distributor? "Contractor Details":"Referrer Details"}</h6>
                <span>Name :</span><span style={{ marginLeft: 237 }}>{data?.user?.name}</span><br></br>
                <span>Unique ID :</span><span style={{ marginLeft: 200 }}>{data?.user?.user_id}</span><br></br>
                <span>Address :</span><span style={{ marginLeft: 130 }}>{data?.user?.district}&nbsp;,&nbsp;{data?.user?.state}</span><br></br>
                <span>Mobile :</span><span style={{ marginLeft: 237 }}>{data?.user?.mobile}</span><br></br>
            </div> */}
            {/* <div>
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
            </div> */}
        </Offcanvas>
    );
}

