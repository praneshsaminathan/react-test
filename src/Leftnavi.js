import React from "react";
import Topnavi from "./Topnavi";
import Home3 from "./image/Home3.jpg"
import i1 from "./image/i1.png"
import i2 from "./image/i2.png"
import i3 from "./image/i3.png"
import i4 from "./image/i4.png"
import Dashboard2 from "./Dashboard2";
import Dashboard1 from "./Dashboard1";
import { Accordion } from "bootstrap";
import { useHistory } from "react-router-dom";
import Transfer from "./Transfer";

const Leftnavi = () => {
    const history = useHistory();
    return(
      <div className="container">
          <div className="row">
              <div className="col-sm-3">
                  <div className="Navi-left">
                      <div className="Background">
                          <img src={Home3} className="d-grid col-6 mx-auto" alt=""></img>
                          <button type="button" style={{borderRadius:"none"}} className="btn btn-success btn-lg d-grid col-11 mx-auto">Send Money</button>
                          <nav className="space" >
                              <ul className="d-grid mt-3 col-12 mx-auto" style={{color:"white"}} >
                                  <li className="colo"> <i  className ="fas fa-home"></i> <a href="#">Home</a> </li>
                                  <li className="colo"> <i  className ="fas fa-credit-card"></i> <a href="#">Cards</a> </li>
                                  <li className="colo"> <i  className ="fas fa-user-alt"></i> <a href="#">Recipients</a> </li>
                                  <li className="colo"> <i  className ="fas fa-user-friends"></i> <a href="#">Team</a> </li>
                                  <li className="colo"> <i  className ="fas fa-file-invoice"></i> <a href="#">Account</a> </li>
                                  <i class="bi-alarm white"></i>
                                  <br></br>
                                  <h6>Balance</h6>
                                  <li className="colo"><img src={i2} style={{width:"25px"}} alt="imag"></img> <a href="#">13,1254 SGD</a></li>
                                  <li className="colo"><img src={i1} style={{width:"25px"}} alt="imag"></img> <a href="#">0 SGD</a></li>
                                  <br></br>
                                  <h6><i class="fas fa-plus-circle"></i> Open a Balance</h6>
                                  <br></br>
                                  <h6>Jars</h6>
                                  <li className="colo"><img src={i4} style={{width:"25px"}} alt="imag"></img> <a href="#">500 SGD<br></br>USD stocks</a></li>
                                  <li className="colo"><img src={i3} style={{width:"25px"}} alt="imag"></img> <a href="#">100 GBP<br></br>Rainy day Fund</a></li>
                                  <br></br>
                                  <h6><i className="fas fa-plus-circle"></i> Open a Jars</h6>
                              </ul>
                          </nav>
                      </div>
                  </div>
              </div>
              <div className="col-9" >
              <Topnavi />
              <br></br>
              <div className="container">
              <div className="row">
                  <div className="col-10">
                      <h6>All Activity</h6>
                  </div>
                  <div className="col-2 right">
                  <button type="button"style={{borderRadius:"none"}} class="btn btn-primary "> <i class="fa fa-search" aria-hidden="true"></i> Search</button>
                      
                  </div>
                  </div>
              </div>
              <br></br>
              <Dashboard1 />
              <Transfer/>
              <br></br>
              <Dashboard2 />
              </div>
          </div>
      </div>

    );
}
export default Leftnavi;