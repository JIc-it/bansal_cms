import React, { useState, useEffect } from 'react';
import { getLeadCount, getOrderCount, getRequestCount } from '../../axiosHandle/dashboardHandle';
import {getActiveUsers} from "../../axiosHandle/userHandle"


export default function DashboardCountCards() {
    const [user_count, setUserCount] = useState(0);
    const [active_user_count, setActiveUserCount] = useState(0);
    const [order_count, setOrderCount] = useState(0);
    const [lead_count, setLeadCount] = useState(0);
    const [request_count, setRequestCount] = useState(0);

    useEffect(() => {
        getActiveUsers()
            .then((count) => {
                setActiveUserCount(count?.active_users);
                setUserCount(count?.total_users)
            })
            .catch((error) => {
                console.error('Error fetching user count:', error);
            });
    }, []);

    useEffect(() => {
        getLeadCount()
            .then((count) => {
                setLeadCount(count);
            })
            .catch((error) => {
                console.error('Error fetching lead count:', error);
            });
    }, []);

    useEffect(() => {
        getOrderCount()
            .then((count) => {
                setOrderCount(count);
            })
            .catch((error) => {
                console.error('Error fetching order count:', error);
            });
    }, []);

    useEffect(() => {
        getRequestCount()
            .then((count) => {
                setRequestCount(count);
            })
            .catch((error) => {
                console.error('Error fetching request count:', error);
            });
    }, []);


    return (
        <>
            <div className="col-xl-3 col-sm-6 same-card">
                <div className="card" style={{ background: "#B22222" }}>
                    <div className="card-body depostit-card">
                        <div className="depostit-card-media d-flex justify-content-between style-1">
                            <div>
                                <h6 style={{ color: "white" }}>Total Number of Active Users</h6><br />
                                <h3 style={{ color: "white" }}>{active_user_count} / {user_count}</h3>
                            </div>
                            <div className="icon-box bg-primary-light" style={{ background: "white" }}>
                                <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="8" fill="#B93E41" />
                                    <ellipse cx="24.2499" cy="16.9997" rx="4.66667" ry="4.66667" fill="white" />
                                    <path d="M33.5832 30.417C33.5832 33.3165 33.5832 35.667 24.2498 35.667C14.9165 35.667 14.9165 33.3165 14.9165 30.417C14.9165 27.5175 19.0952 25.167 24.2498 25.167C29.4045 25.167 33.5832 27.5175 33.5832 30.417Z" fill="white" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 same-card">
                <div className="card">
                    <div className="card-body depostit-card">
                        <div className="depostit-card-media d-flex justify-content-between style-1">
                            <div>
                                <h6>Total Number of Orders</h6><br />
                                <h3>{order_count}</h3>
                            </div>
                            <div className="icon-box bg-primary-light">                            
                                <svg width="33" height="33" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="8" fill="#1B998B" />
                                    <path d="M21.5832 12.333C20.6167 12.333 19.8332 13.1165 19.8332 14.083V15.2497C19.8332 16.2162 20.6167 16.9997 21.5832 16.9997H27.4165C28.383 16.9997 29.1665 16.2162 29.1665 15.2497V14.083C29.1665 13.1165 28.383 12.333 27.4165 12.333H21.5832Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0832 14.7091C16.6157 14.7914 15.6892 15.0253 15.025 15.6894C13.9999 16.7146 13.9999 18.3645 13.9999 21.6643V28.6643C13.9999 31.9641 13.9999 33.6141 15.025 34.6392C16.0501 35.6643 17.7 35.6643 20.9999 35.6643H27.9999C31.2997 35.6643 32.9496 35.6643 33.9748 34.6392C34.9999 33.6141 34.9999 31.9641 34.9999 28.6643V21.6643C34.9999 18.3645 34.9999 16.7146 33.9748 15.6894C33.3106 15.0253 32.3841 14.7914 30.9165 14.7091V15.2497C30.9165 17.1827 29.3495 18.7497 27.4165 18.7497H21.5832C19.6502 18.7497 18.0832 17.1827 18.0832 15.2497V14.7091ZM28.5969 24.6394C28.9502 24.3096 28.9693 23.7559 28.6396 23.4026C28.3098 23.0494 27.7561 23.0303 27.4029 23.36L22.9999 27.4694L21.5969 26.16C21.2436 25.8303 20.6899 25.8494 20.3602 26.2026C20.0305 26.5559 20.0496 27.1096 20.4029 27.4394L22.4029 29.306C22.739 29.6198 23.2607 29.6198 23.5969 29.306L28.5969 24.6394Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 same-card">
                <div className="card">
                    <div className="card-body depostit-card">
                        <div className="depostit-card-media d-flex justify-content-between style-1">
                            <div>
                                <h6>Total Number of Leads</h6><br />
                                <h3>{lead_count}</h3>
                            </div>
                            <div className="icon-box bg-primary-light">
                                <svg width="33" height="33" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="8" fill="#947BD3" />
                                    <path d="M27.8332 18.7503C27.8332 21.0055 26.005 22.8337 23.7498 22.8337C21.4947 22.8337 19.6665 21.0055 19.6665 18.7503C19.6665 16.4952 21.4947 14.667 23.7498 14.667C26.005 14.667 27.8332 16.4952 27.8332 18.7503Z" fill="white" />
                                    <path d="M30.7499 29.2503C30.7499 31.5055 27.6159 33.3337 23.7499 33.3337C19.8839 33.3337 16.7499 31.5055 16.7499 29.2503C16.7499 26.9952 19.8839 25.167 23.7499 25.167C27.6159 25.167 30.7499 26.9952 30.7499 29.2503Z" fill="white" />
                                    <path d="M18.059 15.833C18.266 15.833 18.4681 15.8533 18.6633 15.892C18.1878 16.7365 17.9166 17.7114 17.9166 18.7497C17.9166 19.7626 18.1748 20.7153 18.6289 21.5454C18.4444 21.5798 18.2539 21.5978 18.059 21.5978C16.4088 21.5978 15.0711 20.3073 15.0711 18.7154C15.0711 17.1235 16.4088 15.833 18.059 15.833Z" fill="white" />
                                    <path d="M16.1051 32.15C15.4426 31.3579 14.9999 30.386 14.9999 29.2497C14.9999 28.1481 15.4159 27.201 16.045 26.4225C13.8229 26.5949 12.0833 27.8102 12.0833 29.284C12.0833 30.7715 13.8534 31.9958 16.1051 32.15Z" fill="white" />
                                    <path d="M29.5832 18.7497C29.5832 19.7626 29.325 20.7153 28.8708 21.5454C29.0553 21.5798 29.2459 21.5978 29.4408 21.5978C31.0909 21.5978 32.4286 20.3073 32.4286 18.7154C32.4286 17.1235 31.0909 15.833 29.4408 15.833C29.2337 15.833 29.0316 15.8533 28.8364 15.892C29.3119 16.7365 29.5832 17.7114 29.5832 18.7497Z" fill="white" />
                                    <path d="M31.3946 32.15C33.6463 31.9958 35.4165 30.7715 35.4165 29.284C35.4165 27.8102 33.6769 26.5949 31.4547 26.4225C32.0838 27.201 32.4998 28.1481 32.4998 29.2497C32.4998 30.386 32.0572 31.3579 31.3946 32.15Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 same-card">
                <div className="card">
                    <div className="card-body depostit-card">
                        <div className="depostit-card-media d-flex justify-content-between style-1">
                            <div>
                                <h6>Total Pending Requests</h6><br />
                                <h3>{request_count}</h3>
                            </div>
                            <div className="icon-box bg-primary-light">
                                <svg width="33" height="33" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="8" fill="#2E294E" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8668 13.6998C13.5 15.0667 13.5 17.2666 13.5 21.6663V26.333C13.5 30.7328 13.5 32.9327 14.8668 34.2995C16.2337 35.6663 18.4336 35.6663 22.8333 35.6663H25.1667C29.5664 35.6663 31.7663 35.6663 33.1332 34.2995C34.5 32.9327 34.5 30.7328 34.5 26.333V21.6663C34.5 17.2666 34.5 15.0667 33.1332 13.6998C31.7663 12.333 29.5664 12.333 25.1667 12.333H22.8333C18.4336 12.333 16.2337 12.333 14.8668 13.6998ZM19.3333 20.7913C18.8501 20.7913 18.4583 21.1831 18.4583 21.6663C18.4583 22.1496 18.8501 22.5413 19.3333 22.5413H28.6667C29.1499 22.5413 29.5417 22.1496 29.5417 21.6663C29.5417 21.1831 29.1499 20.7913 28.6667 20.7913H19.3333ZM19.3333 25.458C18.8501 25.458 18.4583 25.8498 18.4583 26.333C18.4583 26.8163 18.8501 27.208 19.3333 27.208H25.1667C25.6499 27.208 26.0417 26.8163 26.0417 26.333C26.0417 25.8498 25.6499 25.458 25.1667 25.458H19.3333Z" fill="white" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



