import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";


const ViewPermission = ({
  open,
  setOpen,
  data
}) => {

  

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
      
        <>
          <div className="ms-4">
            <h4>Permission</h4>
            <div>
            <table className="admin-table">
              <tbody>
              <tr>
              <th>Section</th>
              <th className="text-center">Create</th>
              <th  className="text-center">View</th>
              <th  className="text-center">Edit</th>
              <th  className="text-center">Delete</th>
              </tr>
              <tr>
                <td>Leads</td>
                <td  className="text-center"><input type="checkbox" checked={data?.leads?.create} value={data?.leads?.create}/></td>
                <td  className="text-center"><input type="checkbox" checked={data?.leads?.view} value={data?.leads?.view}/></td>
                <td  className="text-center"><input type="checkbox" checked={data?.leads?.edit} value={data?.leads?.edit}/></td>
                <td  className="text-center"><input type="checkbox" checked={data?.leads?.delete} value={data?.leads?.delete}/></td>
              </tr>
              <tr>
              <td>Points</td>
              <td  className="text-center"><input type="checkbox" checked={data?.points?.create} value={data?.points?.create}/></td>
                <td  className="text-center"><input type="checkbox" checked={data?.points?.view} value={data?.points?.view}/></td>
                <td  className="text-center"><input type="checkbox" checked={data?.points?.edit} value={data?.points?.edit}/></td>
                <td  className="text-center"><input type="checkbox" checked={data?.points?.delete} value={data?.points?.delete}/></td>
              </tr>
              <tr>
              <td>Rewards</td>
              <td  className="text-center"><input type="checkbox" checked={data?.rewards?.create} value={data?.rewards?.create}/></td>
                <td  className="text-center"><input type="checkbox"  checked={data?.rewards?.view} value={data?.rewards?.view}/></td>
                <td  className="text-center"><input type="checkbox" checked={data?.rewards?.edit} value={data?.rewards?.edit}/></td>
                <td  className="text-center"><input type="checkbox" checked={data?.rewards?.delete} value={data?.rewards?.delete}/></td>
              </tr>
              <tr>
              <td>Mobile</td>
              <td  className="text-center"><input type="checkbox" checked={data?.mobile?.create} value={data?.mobile?.create}/></td>
                <td  className="text-center"><input type="checkbox" checked={data?.mobile?.view} value={data?.mobile?.view}/></td>
                <td className="text-center"><input type="checkbox" checked={data?.mobile?.edit} value={data?.mobile?.edit}/></td>
                <td className="text-center"><input type="checkbox" checked={data?.mobile?.delete} value={data?.mobile?.delete}/></td>
              </tr>
              </tbody>
            </table>
            </div>
          </div>
        </>
      
    </Offcanvas>
  );
};

export default ViewPermission;
