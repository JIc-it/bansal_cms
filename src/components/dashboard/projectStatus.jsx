import React,{useState,useEffect} from 'react';
import PieChart from '../pieChart';
import { getrewardredeemed } from '../../axiosHandle/dashboardHandle';

export default function ProjectStatus() {
    const[redeeemed,setredeemed]=useState(0);

        useEffect(() => {
            getrewardredeemed()
                .then((data) => {
                    setredeemed(data?.total_redeemed_count);
                })
                .catch((error) => {
                    console.error('Error fetching :', error);
                });
        }, []);
 
    return (
        <div className="card">
            <div className="card-header pb-0 border-0">

                <h4 className="heading mb-0">Projects Status</h4>

                <select className="default-select status-select normal-select">
                    <option value="All Time">All Time</option>
                    <option value="Monthly">Monthly</option>
                </select>
            </div>
            <h4 style={{ marginLeft: "17px" }}>{redeeemed}</h4>
            <div className="card-body">
                <div style={{ display: 'flex' }}>
                    <PieChart />
                </div>
            </div>
        </div>
    );
}



