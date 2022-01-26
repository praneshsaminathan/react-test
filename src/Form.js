import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";

const Form = () =>{

    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

  const singup= () =>{

console.warn(email,password);

let data = {email,password}
fetch (" http://3.110.27.233:9000/v1/auth/login" ,{
    method:"POST",
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
}).then((result) =>{
    console.warn("result", result)
})
  }
   
    return(
        <div className="container">
      <div className="row">
         <div className="col">
         <div className="d-grid gap-2 col-6 mx-auto">
             <form autoComplete="off" className="form">
          <div className="form-group">
          <label htmlFor="email">Name</label>
        <input type="email" name="email" className="form-control" 
         value={email}
         onChange={(e)=>{setemail(e.target.value)}} required></input>
        </div>
        <div className="form-group">
          <label htmlFor="current-password">password</label>
        <input type="current-password" name="current-password" className="form-control"   id="current-password"
         value={password}
         onChange={(e)=>{setpassword(e.target.value)}}  required></input>
        </div>
        <br></br>
        <div className="form-group">
        <input type="checkbox" ></input> Remember
        <a className="d-grid col-12 mx-auto" style={{textDecoration:"none"}} href="#" >Forget Password?</a>
        </div>
        <br></br>
        <Link to={{pathname:"/add"}}>
        <div className="d-grid gap-2 col-12 mx-auto">
         <button onClick={singup}  className="btn btn-primary btn-block-btn-block">Login <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
        </Link>
        <br></br>
        <a className="d-grid col-7 mx-auto" href="#" >Login with a different account</a>
        </form>
        </div>
        </div>
        </div>
        </div>
             
    );
}
export default Form;