export default function LeadTable(props) {
    return (
        <table id="list-tbl" class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Referred By</th>
                    <th>Quantity</th>
                    <th className="text-end">Action</th>
                </tr>
            </thead>
            <tbody>

                {props.data && props.data.length > 0 ? (
                    props.data.slice(0, 5).map((lead) => (
                        <tr key={lead.id}>
                            <td><h6>{lead.name}</h6></td>
                            <td><h6>{lead.mobile_no}</h6></td>
                            <td><h6>{lead.referral_id}</h6></td>
                            <td><h6>{lead.order}</h6></td>
                            <td>
                                <button className="btn btn-primary btn-sm">View Request</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">No leads available</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}



