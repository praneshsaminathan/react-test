import React from "react";
import d1 from "./image/d1.jpg"
import d2 from "./image/d2.jpg"
import d3 from "./image/d3.jpg"

const Dashboard1 = () => {
    return (
        <div className="row">
            <div className="col">
              <div className="shadow">
            <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item" className="d-grid col-11 mx-auto">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion" style={{backgroundColor:"white",border:"none",fontSize:"15px"}} type="button" aria-expanded="false" aria-controls="flush-collapseOne">
        Today
      </button>
    </h2>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <img src={d1} style={{width:"45px"}} alt="imag" />  To Arcc Offices Ltd 
        Send
        <h6 className="d-grid col-6 mx-auto " style={{textAlign:"right",fontSize:"13px"}}>3,577 SGD <br></br>
      3,577,93 SGD</h6>
      </button>
     
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <img src={d3} style={{width:"45px"}} alt="imag" /> TO your SGD balance <br></br>
       Moved
       <h6 className="d-grid col-6 mx-auto" style={{textAlign:"right",fontSize:"13px"}}>3,577 SGD <br></br>
      3,577,93 SGD</h6>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <img src={d2} style={{width:"45px"}} alt="imag" /> From Arcc Offices Ltd <br></br>
      <h6 className="d-grid col-6 mx-auto" style={{textAlign:"right",fontSize:"13px"}}>3,577 SGD <br></br>
      3,577,93 SGD</h6>
      </button>
    </h2>
    <div className="col-12">
    <div id="flush-collapseThree"  className="accordion-collapse collapse show" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <table className="table">
  <thead>
    <tr>
      <th scope="co">Set up by </th>
      <th scope="col">Saravanan Sivakeishnan</th>
      <th scope="col">Transfer Number</th>
      <th scope="col">#325689130</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Today at 10:58 am</th>
      <td>Mark</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <th scope="row">Today at 10:58 am</th>
      <td>Mark</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <th scope="row">Today at 10:58 am</th>
      <td>Mark</td>
      <td></td>
      <td></td>
      </tr>
      <tr>
      <th scope="row">Today at 10:58 am</th>
      <td>Mark</td>
      <td></td>
      <td></td>
      </tr>
  </tbody>
</table>
<div className="d-grid col-6 mx-auto">
  <button className="btn btn-outline-primary" type="button">Share With recipient</button>
</div>
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
export default Dashboard1;