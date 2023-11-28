import React, { useState, useEffect } from 'react';
import { getrewardproducts, getrejectedOrders, getrejectedleads } from "../../axiosHandle/dashboardHandle"

export default function ItemCounts() {
    const [rewardCount, setRewardCount] = useState(0);
    const [rejectedordercount, setRejectedOrderCount] = useState(0);
    const [rejectedleadscount, setRejectedLeadsCount] = useState(0);

    useEffect(() => {
        getrewardproducts()
            .then((count) => {
                setRewardCount(count);
            })
            .catch((error) => {
                console.error('Error fetching user count:', error);
            });
    }, []);

    useEffect(() => {
        getrejectedOrders()
            .then((count) => {
                setRejectedOrderCount(count);
            })
            .catch((error) => {
                console.error('Error fetching user count:', error);
            });
    }, []);

    useEffect(() => {
        getrejectedleads()
            .then((count) => {
                setRejectedLeadsCount(count);
            })
            .catch((error) => {
                console.error('Error fetching user count:', error);
            });
    }, []);

    return (
        <div className="row">
            <div className="col-xl-4 col-sm-7 same-card">
                <div className="card">
                    <div className="card-body depostit-card">
                        <div className="depostit-card-media d-flex justify-content-between style-1">
                            <div>
                                <h6>Reward Products</h6><br />
                                <h3>{rewardCount}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-sm-7 same-card">
                <div className="card">
                    <div className="card-body depostit-card">
                        <div className="depostit-card-media d-flex justify-content-between style-1">
                            <div>
                                <h6>Pending Reward</h6><br />
                                <h3>{rejectedordercount}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-sm-7 same-card">
                <div className="card">
                    <div className="card-body depostit-card">
                        <div className="depostit-card-media d-flex justify-content-between style-1">
                            <div>
                                <h6>Rejected Reward</h6><br />
                                <h3>{rejectedleadscount}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}



