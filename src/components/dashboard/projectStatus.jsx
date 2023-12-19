import React, { useState, useEffect } from 'react';
import PieChart from '../pieChart';
import { getrewardredeemed,getrewardredeemedqtr } from '../../axiosHandle/dashboardHandle';

export default function ProjectStatus() {
    const [redeeemed, setredeemed] = useState([]);
    const [Totalcount, setTotalrwardcount] = useState(0);
    const [type,setType]=useState("All Time")

    useEffect(() => {
        if(type==="All Time"){
            getrewardredeemed()
            .then((data) => {
                setredeemed(data?.redeemed_rewards);
                setTotalrwardcount(data?.total_redeemed_count)
            })
            .catch((error) => {
                console.error('Error fetching :', error);
            });
        }

        if(type==="Quarter"){
            getrewardredeemedqtr()
            .then((data) => {
                setredeemed(data?.results);
                setTotalrwardcount(data?.total)
            })
            .catch((error) => {
                console.error('Error fetching :', error);
            });   
        }
    }, [type]);

    const reward_name = redeeemed.length>0 && redeeemed?.map((dat) => `${dat?.reward_id?.title}   -  ${dat?.reward_id?.points}`)
    const reward_points = redeeemed.length>0 && redeeemed?.map((dat) => dat?.reward_id?.times_redeemed)

    return (
        <div className="card">
            <div className="card-header pb-0 border-0">
                <h4 className="heading mb-0">Product Redeemed</h4>
                <select className="default-select status-select normal-select" value={type} onChange={(e)=>setType(e.target.value)}>
                    <option value="All Time">All Time</option>
                    <option value="Quarter">Quarter</option>
                </select>
            </div>
            <h4 style={{ marginLeft: "17px" }}>{Totalcount}</h4>
            <div className="">
                <div className='w-56'>
                    {redeeemed.length > 0 && <PieChart reward_name={reward_name} reward_points={reward_points} />}
                </div>
            </div>
        </div>
    );
}



