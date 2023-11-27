import React, { useState, useEffect } from 'react';
import { getContractorAllRequest } from '../../../axiosHandle/dashboardHandle';


export default function ContactorAll() {

    const [contractor_data, setContractorData] = useState(null);

    useEffect(() => {
        getContractorAllRequest()
            .then((data) => {
                setContractorData(data.top_performers);
            })
            .catch((error) => {
                console.error('Error fetching contractor data:', error);
            });
    }, []);

    return (
        <div className="card-body p-0" style={{ height: 336 }}>
            <h4 className="heading mb-2" style={{ marginLeft: 15 }}>Top 10 Star Performers</h4>
            <div className="table-responsive active-projects active-projects ItemsCheckboxSec selling-product shorting ">
                <table id="empoloyees-tblwrapper" className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unique id</th>
                            <th>Mobile</th>
                            <th>Location</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>

                        {contractor_data && contractor_data.length > 0 ? (
                            contractor_data.slice(0, 5).map((data) => (
                                <tr key={data.id}>
                                    <td><h6>{data.name}</h6></td>
                                    <td><h6>{data.unique_id}</h6></td>
                                    <td><h6>{data.mobile}</h6></td>
                                    <td><h6>{data.district_name}</h6></td>
                                    <td><h6>{data.points===null?0:data.points} pts</h6></td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No user available</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

