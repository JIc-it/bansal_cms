import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const ViewPermission = ({ open, setOpen, data }) => {

  return (
    <Offcanvas
      show={true}
      onHide={() => {
        setOpen(false);
      }}
      placement="end"
      style={{ overflow: "auto" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
      </Offcanvas.Header>

      <div className="ms-4">
        <h4>Permission</h4>
        <div>
          <table className="admin-table mx-2">
            <tbody>
              <tr>
                <th>Section</th>
                <th className="text-center">Create</th>
                <th className="text-center">Update</th>
                <th className="text-center">Action</th>
                <th className="text-center">Delete</th>
              </tr>
              <tr>
                <td>Order requests</td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.order_requests?.create}
                    value={data?.order_requests?.create}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.order_requests?.update}
                    value={data?.order_requests?.update}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.order_requests?.action}
                    value={data?.order_requests?.action}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.order_requests?.delete}
                    value={data?.order_requests?.delete}
                  />
                </td>
              </tr>
              <tr>
                <td>Lead requests </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.lead_requests?.create}
                    value={data?.lead_requests?.create}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.lead_requests?.update}
                    value={data?.lead_requests?.update}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.lead_requests?.action}
                    value={data?.lead_requests?.action}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.lead_requests?.delete}
                    value={data?.lead_requests?.delete}
                  />
                </td>
              </tr>
              <tr>
                <td>Points orders </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.points_orders?.create}
                    value={data?.points_orders?.create}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.points_orders?.update}
                    value={data?.points_orders?.update}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.points_orders?.action}
                    value={data?.points_orders?.action}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.points_orders?.delete}
                    value={data?.points_orders?.delete}
                  />
                </td>
              </tr>
              <tr>
                <td>Points leads </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.points_leads?.create}
                    value={data?.points_leads?.create}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.points_leads?.update}
                    value={data?.points_leads?.update}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.points_leads?.action}
                    value={data?.points_leads?.action}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.points_leads?.delete}
                    value={data?.points_leads?.delete}
                  />
                </td>
              </tr>
              <tr>
                <td>Reward products </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.reward_products?.create}
                    value={data?.reward_products?.create}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.reward_products?.update}
                    value={data?.reward_products?.update}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.reward_products?.action}
                    value={data?.reward_products?.action}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.reward_products?.delete}
                    value={data?.reward_products?.delete}
                  />
                </td>
              </tr>
              <tr>
                <td>Redemptions </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.redemptions?.create}
                    value={data?.redemptions?.create}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.redemptions?.update}
                    value={data?.redemptions?.update}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.redemptions?.action}
                    value={data?.redemptions?.action}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.redemptions?.delete}
                    value={data?.redemptions?.delete}
                  />
                </td>
              </tr>
              <tr>
                <td>Redemptions window </td>
                <td className="text-center">
                  {/* <input
                    type="checkbox"
                    checked={data?.redemptions_window?.create}
                    value={data?.redemptions_window?.create}
                  /> */}
                </td>
                <td className="text-center">
                  {/* <input
                    type="checkbox"
                    checked={data?.redemptions_window?.update}
                    value={data?.redemptions_window?.update}
                  /> */}
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.redemptions_window?.action}
                    value={data?.redemptions_window?.action}
                  />
                </td>
                <td className="text-center">
                  {/* <input
                    type="checkbox"
                    checked={data?.redemptions_window?.delete}
                    value={data?.redemptions_window?.delete}
                  /> */}
                </td>
              </tr>
              <tr>
                <td>Users </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.user?.create}
                    value={data?.user?.create}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.user?.update}
                    value={data?.user?.update}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.user?.action}
                    value={data?.user?.action}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.user?.delete}
                    value={data?.user?.delete}
                  />
                </td>
              </tr>
              <tr>
                <td>Promotions </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.promotions?.create}
                    value={data?.promotions?.create}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.promotions?.update}
                    value={data?.promotions?.update}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.promotions?.action}
                    value={data?.promotions?.action}
                  />
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={data?.promotions?.delete}
                    value={data?.promotions?.delete}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Offcanvas>
  );
};

export default ViewPermission;