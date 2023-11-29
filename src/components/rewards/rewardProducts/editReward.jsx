import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { editRewardProductRequest } from '../../../axiosHandle/rewardHandle';
import { toast } from "react-toastify";

const offcanvasStyle = {
    width: '365px',
    height: '100%',
    display: 'flex',
    marginLeft: 18,
    marginTop: 20,
    flexDirection: 'column',
};

export default function EditReward({ open, data, setOpen, refreshDataTable, setisUpdated }) {
    const [loading, setLoading] = useState(false);
    const [credentials, setCredentials] = useState({
        title: data.title,
        points: data.points,
        description: data.description,
        item_image: data.item_image,
        image_name: data.image_name,
        is_active: data.is_active,
    });
    const [showImages, setShowImages] = useState("");

    const handleUpdate = async () => {
        try {
            setLoading(true);

            const { title, points, description, item_image, image_name, is_active } = credentials;

            // Validate image dimensions
            const image = new Image();
            image.src = showImages.trim() !== "" ? showImages : item_image;
            await new Promise((resolve, reject) => {
                image.onload = () => {
                    if (image.width === 140 && image.height === 140) {
                        resolve();
                    } else {
                        reject(new Error("Image dimensions must be 140x140 pixels."));
                    }
                };
                image.onerror = () => reject(new Error("Failed to load image."));
            });

            // Validate description length
            if (description.length !== 30) {
                throw new Error("Description must be exactly 30 characters.");
            }

            const f_data = new FormData();
            f_data.append('title', title);
            f_data.append('points', points);
            f_data.append('description', description);
            f_data.append('image', item_image);
            f_data.append('is_active', is_active);

            const response = await editRewardProductRequest(data.id, f_data);

            if (response) {
                toast.success("Reward product updated successfully!");
                setisUpdated(true);

                if (refreshDataTable && typeof refreshDataTable === 'function') {
                    refreshDataTable();
                }
                setOpen(false);
            } else {
                console.error('Error while creating reward product:', response.error);
            }
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message);
            }
            console.error('An error occurred during the request:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
       
        <Offcanvas show={open} onHide={() => { setOpen(false); setShowImages("") }} placement="end" style={{ overflow: 'auto' }}>
            <Offcanvas.Header style={{ marginLeft: 345 }} closeButton>
            </Offcanvas.Header>
            <div style={offcanvasStyle}>
                <h5>Reward Product Details</h5>
                <div style={{ marginTop: 20 }}>
                    <input type="text" className="form-control" value={credentials.title}
                    maxLength="15"
                        onChange={(e) => setCredentials({ ...credentials, title: e.target.value })} placeholder='Product Name' />
                </div>
                <div style={{ marginTop: 20 }}>
                    <input type="text" className="form-control" value={credentials.points}
                        onChange={(e) => {
                            const values=e.target.value
                            if(values<=800000){
                              setCredentials({ ...credentials, points: values });
                            }
                            
                          }} placeholder='Points' maxLength={800000}/>
                </div>
                <div style={{ marginTop: 20 }}>
                    <textarea rows="4" className="form-control"
                        maxLength="30"
                        onChange={(e) => setCredentials({ ...credentials, description: e.target.value })} value={credentials.description} placeholder='description'></textarea>
                </div>
                <div style={{ marginTop: 20 }}>
                    <img src={showImages.trim() !== "" ? showImages : credentials.item_image} style={{ width: '50px', height: '50px' }} alt="Product Image" />
                </div>
                <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <label>Product Photo (140*140)</label>
                        <input type="file" id="imageUpload" style={{ display: 'none' }}
                            onChange={(e) => {
                                setCredentials({ ...credentials, item_image: e.target.files[0] });
                                const file = e.target.files[0];

                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setShowImages(reader.result);
                                    };
                                    reader.readAsDataURL(file);
                                }

                            }} />
                        <label htmlFor="imageUpload" className="btn btn-secondary btn-sm" style={{ marginLeft: 106 }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10C2 11.8856 2 12.8284 2.58579 13.4142C3.17157 14 4.11438 14 6 14H10C11.8856 14 12.8284 14 13.4142 13.4142C14 12.8284 14 11.8856 14 10" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.99967 10.6667V2M7.99967 2L10.6663 4.91667M7.99967 2L5.33301 4.91667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>&nbsp;&nbsp;
                            Upload</label>
                    </div>
                </div>

                <div>
                    <h6>Status</h6><br />
                    <div className="form-check form-switch" style={{ position: 'relative', bottom: '35px', float: 'inline-end' }}>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{credentials.is_active ? "Active" : "Inactive"}</label>
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                            onChange={(e) => setCredentials({ ...credentials, is_active: !credentials.is_active })}
                            defaultChecked={credentials.is_active} value={credentials.is_active} />
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px', marginLeft: '13px', marginRight: '10px' }}>
                <button className="btn btn-primary" onClick={handleUpdate} style={{ flex: 1, margin: '0 5px', width: '100%' }}>
                    {loading ? 'Loading...' : 'Confirm'}
                </button>
            </div>
        </Offcanvas>
    );
}
