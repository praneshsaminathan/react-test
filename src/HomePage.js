import React, { useState } from "react";
import Home2  from "./image/Home2.jpg";
import Home1 from "./image/Home1.jpg";
import Form from "./Form";

const HomePage = () => {
    return (
        <div className="main">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="home-background">
                        <div className="left-col">
                        <div  className="card-border-none">
                         <img src={Home2}  className="card-img-top" alt="home-image" />
                         <div className="container">
                          <div  className="card-primary" style={{textAlign:"left"}}>
                              <h5  className="card-title" style={{color:"white"}}>New name ,same great account</h5>
                             <p  className="card-text" style={{color:"#2b8ec7"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                             <hr></hr>
                             <a href="#"  className="card-link" style={{color:"white"}}>Why the change?Read our blog</a>
                                 </div>
                                 </div>
                                </div>
                        </div>
                        <div className="col">
                        <div className="right-col" style={{marginTop:"40px"}}>
                        <img src={Home1} className="d-grid col-3 mx-auto" alt="home-image" />
                        <br></br>
                        <h1 className="d-grid col-6 mx-auto" style={{textAlign:"center"}}>Hi,Welcome Back!</h1>
                        <br></br>
                        <Form />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    );
}
export default HomePage;