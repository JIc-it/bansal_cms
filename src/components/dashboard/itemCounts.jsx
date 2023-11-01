import React from 'react';

export default function ItemCounts() {
    return (
        <div className="row">
            <div className="col-xl-4 col-sm-7 same-card">
                <div className="card">
                    <div className="card-body depostit-card">
                        <div className="depostit-card-media d-flex justify-content-between style-1">
                            <div>
                                <h6>Reward Products</h6><br />
                                <h3>12</h3>
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
                                <h6>Rejected Orders</h6><br />
                                <h3>12</h3>
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
                                <h6>Rejected Leads</h6><br />
                                <h3>7000</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}



