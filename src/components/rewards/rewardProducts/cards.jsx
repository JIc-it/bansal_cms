export default function Cards() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-9 wid-100">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 same-card">
                            <div className="card">
                                <div className="card-body depostit-card">
                                    <div className="depostit-card-media d-flex justify-content-between style-1">
                                        <div>
                                            <h6>Redemption Window</h6><br />
                                            <div className="form-check form-switch">
                                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Closed</label>
                                            </div>
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
                                            <h6>Products Redeemed</h6><br />
                                            <h3>5200</h3>
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
                                            <h6>Redemptions in Current Qtr</h6><br />
                                            <h3>12</h3>
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
                                            <h6>Reward Products</h6><br />
                                            <h3>12</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
