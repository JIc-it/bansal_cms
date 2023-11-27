import React, { useState, useEffect } from 'react';
import PieChart from '../pieChart';
import { getrewardredeemed } from '../../axiosHandle/dashboardHandle';

export default function ProjectStatus() {
    const [redeeemed, setredeemed] = useState([]);
    const [Totalcount, setTotalrwardcount] = useState(0);

    useEffect(() => {
        getrewardredeemed()
            .then((data) => {
                setredeemed(data?.redeemed_rewards);
                setTotalrwardcount(data?.total_redeemed_count)
            })
            .catch((error) => {
                console.error('Error fetching :', error);
            });
    }, []);
    const reward_name = redeeemed && redeeemed?.map((dat) => `${dat?.reward_id?.title}   -  ${dat?.reward_id?.points}`)
    const reward_points = redeeemed && redeeemed?.map((dat) => dat?.reward_id?.times_redeemed)

    return (
        <div className="card">
            <div className="card-header pb-0 border-0">

                <h4 className="heading mb-0">Product Redeemed</h4>
                <select className="default-select status-select normal-select">
                    <option value="All Time">All Time</option>
                    <option value="Quater">Quater</option>
                </select>
            </div>
            <h4 style={{ marginLeft: "17px" }}>{Totalcount}</h4>
            <div className="card-body">
                <div style={{ display: "inline-flex" }}>
                    <PieChart reward_name={reward_name} reward_points={reward_points} />
                </div>
            </div>
        </div>
    );
}



