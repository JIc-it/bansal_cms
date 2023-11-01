import React from 'react';
import PieChart from '../pieChart';

export default function ProjectStatus() {
    return (
        <div className="card">
            <div className="card-header pb-0 border-0">

                <h4 className="heading mb-0">Projects Status</h4>

                <select className="default-select status-select normal-select">
                    <option value="All Time">All Time</option>
                    <option value="Monthly">Monthly</option>
                </select>
            </div>
            <h4 style={{ marginLeft: "17px" }}>5200</h4>
            <div className="card-body">
                <div style={{ display: 'flex' }}>
                    <PieChart />
                </div>
            </div>
        </div>
    );
}



