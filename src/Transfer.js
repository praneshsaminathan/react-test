import React from "react";
import Form from "./Form";


const Transfer = () =>{
    return(
        <div className="boxi">
        <div className="container">
        <div className="row">
            <div className="col-3-md-3">
            <form className="form" >
          <div className="form-group">
          <label htmlFor="model">your send (approximately)</label>
        <input type="text" name="model" className="form-control" id="model"></input>
        </div>
        </form>
            </div>
            <div className="col-3-md-6">
            <form className="form" >
          <div className="form-group">
          <label htmlFor="model1">your send (approximately)</label>
          <input type="text" name="model" className="form-control" id="model1"></input>
          </div>
        </form>
            </div>
        </div>
        <br></br>
            <button type="button" style={{borderRadius:"none",backgroundColor:" #147038",color:"white"}} class="btn btn btn-lg d-grid col-11  mx-auto">Repeat Transfer</button>
        </div>
        <br></br>
        </div>

    );
}
export default Transfer;