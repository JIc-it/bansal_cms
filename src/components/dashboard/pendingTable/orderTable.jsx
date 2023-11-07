export default function OrderTable(props) {
    return (
        <table id="list-tbl" class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Unique id</th>
                    <th>Distributor id</th>
                    <th>Quantity</th>
                    <th className="text-end">Action</th>
                </tr>
            </thead>
            <tbody>

                {props.data && props.data.length > 0 ? (
                    props.data.slice(0, 5).map((order) => (
                        <tr key={order.id}>
                            <td><h6>{order?.user?.name}</h6></td>
                            <td><h6>{order?.user?.user_id}</h6></td>
                            <td><h6>{order?.distributor?.user_id}</h6></td>
                            <td><h6>{order.quantity}</h6></td>
                            <td>
                                <button className="btn btn-primary btn-sm">View Request</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">No orders available</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}



