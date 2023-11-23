import React,{useState,useEffect} from 'react';
import PieChart from '../pieChart';
import { getrewardredeemed } from '../../axiosHandle/dashboardHandle';

export default function ProjectStatus() {
    const[redeeemed,setredeemed]=useState([]);
    const[Totalcount,setTotalrwardcount]=useState(0);

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
 let reward_name= redeeemed && redeeemed?.map((dat)=>dat?.results?.reward_id?.title)
 let reward_points=redeeemed && redeeemed?.map((dat)=>dat?.results?.reward_id?.points)

    return (
        <div className="card">
            <div className="card-header pb-0 border-0">

                <h4 className="heading mb-0">Product Redeemed</h4>
                <select className="default-select status-select normal-select">
                    <option value="All Time">All Time</option>
                    <option value="Monthly">Monthly</option>
                </select>
            </div>
            <h4 style={{ marginLeft: "17px" }}>{Totalcount}</h4>
            <div className="card-body">
                <div style={{ display:"inline-block" }}>
                    <PieChart reward_name={reward_name} reward_points={reward_points}/>
                </div>
            </div>
        </div>
    );
}



