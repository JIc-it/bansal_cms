import React, { useState, useEffect } from 'react';
import { getDistributorAllRequest } from '../../../axiosHandle/dashboardHandle';


export default function DistributorAll() {

    const [distributor_data, setDistributorData] = useState(null);

    useEffect(() => {
        getDistributorAllRequest()
            .then((data) => {
                setDistributorData(data.top_distributors);
            })
            .catch((error) => {
                console.error('Error fetching distributor data:', error);
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
                            <th />
                        </tr>
                    </thead>
                    <tbody>

                        {distributor_data && distributor_data.length > 0 ? (
                            distributor_data.slice(0, 5).map((data) => (
                                <tr key={data.id}>
                                    <td><h6>{data.name}</h6></td>
                                    <td><h6>{data.unique_id}</h6></td>
                                    <td><h6>{data.mobile}</h6></td>
                                    <td><h6>{data.district_name}</h6></td>
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

