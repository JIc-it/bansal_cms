
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { createRewardProductRequest } from '../../../axiosHandle/rewardHandle';


const offcanvasStyle = {
    width: '365px',
    height: '100%',
    // backgroundColor: 'lightgray',
    display: 'flex',
    marginLeft: 18,
    marginTop: 20,
    flexDirection: 'column',
};
export default function AddReward({ open, data, setOpen }) {
    const [credentials, setCredentials] = useState({
        title: '',
        points: '',
        description: '',
        item_image: ''
    });

    const handleCreate = async () => {
        try {
            const { title, points, description, item_image } = credentials;

            const data = new FormData(); // Create a FormData object for file uploads.
            data.append('title', title);
            data.append('points', points);
            data.append('description', description);
            data.append('item_image', item_image); // Assuming item_image is an array, use the first element.
            data.append('is_active', true);
            data.append('thumbnail_image', item_image);

            const crt_data = await createRewardProductRequest(data)
            if (crt_data) {
                window.alert('Reward product created successfully!');
            } else {
                console.error('Error while creating reward product:', crt_data.error);
            }
        }
        catch (err) {
            console.log(err);
        }
    };


    const [showOffcanvas, setShowOffcanvas] = useState(open);

    const handleCloseOffcanvas = () => {
        setShowOffcanvas(false);
        setOpen(null)
    }
    return (
        <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" style={{ overflow: 'auto' }}>
            <Offcanvas.Header style={{ marginLeft: 345 }} closeButton>
                {/* <Offcanvas.Title>Reward Product Details</Offcanvas.Title> */}
            </Offcanvas.Header>
            <div style={offcanvasStyle}>
                <h5>Reward Product Details</h5>
                <div style={{ marginTop: 20 }}>
                    <input type="text" className="form-control" value={credentials.title}
                        onChange={(e) => setCredentials({ ...credentials, title: e.target.value })} placeholder='Prodcut Name' />
                </div>
                <div style={{ marginTop: 20 }}>
                    <input type="number" className="form-control" value={credentials.points}
                        onChange={(e) => setCredentials({ ...credentials, points: e.target.value })} placeholder='Points' />
                </div>
                <div style={{ marginTop: 20 }}>
                    <textarea rows="4" className="form-control"
                        onChange={(e) => setCredentials({ ...credentials, description: e.target.value })} defaultValue={credentials.description} placeholder='Description'></textarea>
                </div>
                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <label>Product Photo (140*140)</label>
                        <input type="file" id="imageUpload" style={{ display: 'none' }}
                            onChange={(e) => setCredentials({ ...credentials, item_image: e.target.files[0] })} />

                        <label htmlFor="imageUpload" className="btn btn-secondary btn-sm" style={{ marginLeft: 106 }}>Choose File</label>
                    </div>
                </div>
                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex' }}>
                        <label>Status</label>
                        <div className="form-check form-switch" style={{ marginLeft: 220 }}>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">IN Active</label>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', marginLeft: '13px', marginRight: '10px' }}>
                <button className="btn btn-primary" onClick={handleCreate} style={{ flex: 1, margin: '0 5px', width: '100%' }}>Confirm</button>

            </div>
        </Offcanvas>
    );
}



