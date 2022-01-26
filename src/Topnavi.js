import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ml from './image/ml.jpg'
import Navbar from 'bootstrap'
import { MenuList } from "@material-ui/core";


const Topnavi = () => {
    return(
        <div className="conatiner">
            <div className="row">
                <div className="col-12-md-6">
                    <div className="Nav-item">
                    <nav  className="navbar navbar-expand-lg navbar-light bg-light">
  <div  className="container-fluid white">
    <a  className="navbar-brand" href="#">Home</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNavDropdown">
    <button  className="btn btn-outline-primary" type="button">Get Something Done</button>
      <ul  className="navbar-nav">
        <li  className="nav-item dropdown">
          <a  className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i  className="far fa-bell"></i> <img src={ml} alt="image" style={{borderRadius:"35px",width:"30px"}}></img> Marlo Technologies Pvt Ltd
          </a>
          <ul  className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a  className="dropdown-item" href="#">Action</a></li>
            <li><a  className="dropdown-item" href="#">Another action</a></li>
            <li><a  className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
                    </div>
                </div>
            </div>
        </div>
    
    );
}
export default Topnavi;