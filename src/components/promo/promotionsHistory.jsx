import React from 'react';
import { useParams } from 'react-router';
import axiosInstance from '../../axiosHandle/authHandle';
import { useState,useEffect } from 'react';

function PromotionsHistory() {
  const paramsid=useParams()
  const [history,setHistory]=useState(null)

  useEffect(()=>{
    axiosInstance.get(`advertisement/ads_history/${paramsid.id}`)
    .then((response) => setHistory(response.data.results))
    .catch((error) => {
      console.error('Error while fetching History:', error);
      throw error;
    });
  },[])


  return (
    <div className="content-body" style={{ width: '82vw', marginLeft: 245 }}>
  {/* row */}
  <div className="container">
    <div className="row" style={{marginLeft: '5px'}}>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive active-projects manage-client">
              <div className="tbl-caption">
                <h4 className="heading mb-0">Promotions/ Ad Spot 01</h4>
              </div>
              <div className="row" style={{marginTop: 20}}>
                    <div className="col-5">
                        <div className="input-group mb-3" style={{ maxWidth: 300, paddingLeft: 15 }}>
                        <input type="text" className="form-control" style={{ marginRight: 10 }} placeholder="Search..." aria-label="Search..." aria-describedby="search-button" />
                        <button className="btn btn-dark" type="button" id="search-button"><i className="fas fa-filter" /></button>
                        </div>
                    </div>
                    <div className="col-6 text-end">
                    <button className="btn btn-light btn-sm" type="button" id="export-button"><i className="fa-solid fa-file-export" /> Export</button>
                    </div>
                </div>
              <div>
                <table id="reports-tbl" className="table">
                  <thead>
                    <tr>
                      <th>Promotions</th>
                      <th>Date &amp; Time</th>
                      <th>Ad Runtime (Days)</th>
                      <th>Status</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {
                      history?.map((data)=>
                      <tr>
                      <td>
                        <h6><img src={data.ad_image} className="img-fluid" style={{height: 100, paddingRight: 10}} />
                          Ad Name</h6>
                      </td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>{new Date(data.updated_at).toLocaleDateString('en-Us',{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"})}</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>30</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <span className={data.is_active===true?"badge badge-success light border-0" :"badge badge-danger light border-0"}>{data.is_active===true?"Active":"Inactive"}</span>
                      </td>
                      <td>
                        <h6 align="center">...</h6>
                      </td>
                    </tr>
                      )
                    }
              

                    {/* <tr>
                      <td>
                        <h6><img src="https://images.wallpapersden.com/image/download/anime-naruto-hd-2023-ai_bW5mbGmUmZqaraWkpJRmbmdlrWZlbWU.jpg" className="img-fluid" style={{height: 50, paddingRight: 10}} />
                          Ad Name</h6>
                      </td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>09 AUG 2023, 06:00 Pm</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>30</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-success light border-0">Active</span>
                      </td>
                      <td>
                        <h6 align="center">...</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6><img src="https://images.wallpapersden.com/image/download/anime-naruto-hd-2023-ai_bW5mbGmUmZqaraWkpJRmbmdlrWZlbWU.jpg" className="img-fluid" style={{height: 50, paddingRight: 10}} />
                          Ad Name</h6>
                      </td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>09 AUG 2023, 06:00 Pm</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>30</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-success light border-0">Active</span>
                      </td>
                      <td>
                        <h6 align="center">...</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6><img src="https://images.wallpapersden.com/image/download/anime-naruto-hd-2023-ai_bW5mbGmUmZqaraWkpJRmbmdlrWZlbWU.jpg" className="img-fluid" style={{height: 50, paddingRight: 10}} />
                          Ad Name</h6>
                      </td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>09 AUG 2023, 06:00 Pm</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <div className="products">
                          <div>
                            <h6>30</h6>
                          </div>	
                        </div>
                      </td>
                      <td>
                        <span className="badge badge-success light border-0">Active</span>
                      </td>
                      <td>
                        <h6 align="center">...</h6>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default PromotionsHistory;
