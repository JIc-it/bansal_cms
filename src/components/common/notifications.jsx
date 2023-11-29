import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useEffect, useState } from 'react';
import { NotificationDelete, NotificationList } from '../../axiosHandle/userHandle';


const notificationsHead={
    width: '122px',
    height: '28px',
    fontSize:19.2,
    marginLeft:20
};

export default function NotificationsOpen({ open, setOpen,showNotification }) {
    const [dataList, setDataList] = useState([]);
    const [showOffcanvas, setShowOffcanvas] = useState(open);
    const [message, setMessage] = useState('');
    const [count, setCount] = useState(0);

    const handleCloseOffcanvas = () => {
        NotificationDelete().then((data) => {
            console.log("NotificationDelete", data)
        })
        setShowOffcanvas(false);
        setOpen(null)
        showNotification(false)
    }

    const notificationsHead = {
        width: '122px',
        height: '28px',
        fontSize: 19.2,
        marginLeft: 20
    };

    const notificationStyle = {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 12,
        color: 'rgba(15, 15, 15, 1)',
        marginTop: '10px',
        marginLeft: '20px'
    };

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
                <h6 style={{ fontSize: 19.2, fontWeight: 500, fontFamily: 'Poppins-Regular' }}>Notifications</h6>
            </div>
            {count === 0 ?
                <div style={{ marginTop: 10, marginLeft: 20 }}>
                    <p style={{ fontSize: 12, fontFamily: 'Poppins', fontWeight: '400', fontSize: 16, color: 'rgba(15, 15, 15, 1)' }}>No New Notifications</p>
                </div> :
                <div>
                    {dataList?.map((data, index) =>
                        <div key={index} style={{
                            ...notificationStyle,
                            backgroundColor:  'transparent',
                            marginRight: 20,
                            padding: 15,
                            borderRadius: 8,
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)', // Add box shadow for a card-like effect
                          }}>
                            <span>{data.message}</span>
                          </div>
                    )}
                </div>
            }
        </Offcanvas>
    );
}


