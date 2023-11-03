import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { editRewardProductRequest } from '../../../axiosHandle/rewardHandle';
import { toast } from "react-toastify";

const offcanvasStyle = {
    width: '365px',
    height: '100%',
    // backgroundColor: 'lightgray',
    display: 'flex',
    marginLeft: 18,
    marginTop: 20,
    flexDirection: 'column',
};

export default function EditReward({ open, data, setOpen }) {
    const [credentials, setCredentials] = useState({
        title: data.title,
        points: data.points,
        description: data.description,
        item_image: data.item_image,
    });

    const handleUpdate = async () => {
        try {
            const { title, points, description, item_image } = credentials;

            const f_data = new FormData();
            f_data.append('title', title);
            f_data.append('points', points);
            f_data.append('description', description);
            f_data.append('item_image', item_image);
            f_data.append('is_active', true);
            f_data.append('thumbnail_image', item_image);

            const response = await editRewardProductRequest(f_data, data.id);

            console.log('Response from editRewardProductRequest:', response);

            if (response.data) {
                toast.success("Reward product updated successfully!");
                // Close the Offcanvas and clear the form
                setOpen(false);
            } else {
                console.error('Error while creating reward product:', response.error);
            }
        } catch (err) {
            console.error('An error occurred during the request:', err);
        }
    };

    return (
        <Offcanvas show={open} onHide={() => setOpen(false)} placement="end" style={{ overflow: 'auto' }}>
            <Offcanvas.Header style={{ marginLeft: 345 }} closeButton>
                {/* <Offcanvas.Title>Reward Product Details</Offcanvas.Title> */}
            </Offcanvas.Header>
            <div style={offcanvasStyle}>
                <h5>Reward Product Details</h5>
                <div style={{ marginTop: 20 }}>
                    <input type="text" className="form-control" value={credentials.title}
                        onChange={(e) => setCredentials({ ...credentials, title: e.target.value })} placeholder='Product Name' />
                </div>
                <div style={{ marginTop: 20 }}>
                    <input type="number" className="form-control" value={credentials.points}
                        onChange={(e) => setCredentials({ ...credentials, points: e.target.value })} placeholder='Points' />
                </div>
                <div style={{ marginTop: 20 }}>
                    <textarea rows="4" className="form-control"
                        onChange={(e) => setCredentials({ ...credentials, description: e.target.value })} value={credentials.description} placeholder='description'></textarea>
                </div>
                <div style={{ marginTop: 20 }}>
                    <img src={credentials.item_image} style={{ width: '150px', height: '150px' }} alt="Product Image" />
                </div>
                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <label>Product Photo (140*140)</label>
                        <input type="file" id="imageUpload" style={{ display: 'none' }}
                            onChange={(e) => setCredentials({ ...credentials, item_image: e.target.files[0] })} />
                        <label htmlFor="imageUpload" className="btn btn-secondary btn-sm" style={{ marginLeft: 106 }}>Choose File</label>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', marginLeft: '13px', marginRight: '10px' }}>
                <button className="btn btn-primary" onClick={handleUpdate} style={{ flex: 1, margin: '0 5px', width: '100%' }}>Confirm</button>
            </div>
        </Offcanvas>
    );
}
