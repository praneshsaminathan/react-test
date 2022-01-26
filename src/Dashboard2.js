import React from "react";
import d1 from "./image/d1.jpg"
import d2 from "./image/d2.jpg"
import d3 from "./image/d3.jpg"
import d4 from "./image/d4.jpg"

const Dashboard2 = () => {
    return (
        <div className="row">
            <div className="col-12-md-12">
              <div className="shadow">
            <div  className="accordion accordion-flush" id="accordionFlushExample">
            <div  className="accordion-item" className="d-grid col-11 mx-auto">
    <h2 className="accordion-heade" id="flush-headingOne">
      <button className="accordion" style={{backgroundColor:"white",border:"none",fontSize:"15px"}} type="button" aria-expanded="false" aria-controls="flush-collapseOne">
        December 3rd
      </button>
    </h2>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFour">
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      <img src={d1} style={{width:"45px"}} alt="imag" />  To Mithum Airpress Pvt Ltd<br></br>
        Send
        <h6 className="d-grid col-6 mx-auto" style={{textAlign:"right",fontSize:"13px"}}>3,577 SGD <br></br>
      3,577,93 SGD</h6>
      </button>
     
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingFive">
      <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      <img src={d2} style={{width:"45px"}} alt="imag" /> From Macrolab Pvt Ltd
       Moved
       <h6 className="d-grid col-6 mx-auto" style={{textAlign:"right",fontSize:"13px"}}>3,577 SGD <br></br>
      3,577,93 SGD</h6>
      </button>
    </h2>
    <div id="flush-collapseFive"className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" className="d-grid col-11 mx-auto">
    <h2 className="accordion-heade" id="flush-headingOne">
      <button className="accordion" style={{backgroundColor:"white",border:"none",fontSize:"15px"}} type="button" aria-expanded="false" aria-controls="flush-collapseOne">
       29th November
      </button>
    </h2>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      <img src={d1} style={{width:"45px"}} alt="imag" /> For your account details 
      <h6 className="d-grid col-6 mx-auto" style={{textAlign:"right",fontSize:"13px"}}>108 SGD</h6>
      </button>
     
    </h2>
    <div id="flush-collapseSix"className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingSevan">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSevan" aria-expanded="false" aria-controls="flush-collapseSevan">
      <img src={d4} style={{width:"45px"}} alt="imag"></img> TO your SGD balance <br></br>
      <h6 className="d-grid col-6 mx-auto" style={{textAlign:"right",fontSize:"13px"}}>65 SGD</h6>
      </button>
    </h2>
    <div id="flush-collapseSevan" className="accordion-collapse collapse" aria-labelledby="flush-headingSevan" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
</div>
            </div>
        </div>

    );
}
export default Dashboard2;