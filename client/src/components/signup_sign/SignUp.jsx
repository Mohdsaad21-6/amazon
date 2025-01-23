import { use, useState } from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {

    const [udata,setUdata]=useState({
      fname:"",
      email:"",
      password:"",
      cpassword:""

    })
console.log(udata);


    const  adddata=(e)=>{
      const {name,value}=e.target;
      setUdata(()=>{
        return {...udata,
          [name]:value
        }
      })


    }
  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazon logo"></img>
          </div>
          <div className="sign_form">
            <form>
              <h1>Sign-Up</h1>
              <div className="form_data">
                <label htmlFor="fname">Your Name</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="Enter Your Name"
                  id="fname"
                  onChange={adddata}
                  value={udata.fname}
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  id="email"
                  onChange={adddata}
                  value={udata.email}
                />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile Number</label>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Enter Your Number"
                  id="mobile"
                  onChange={adddata}
                  value={udata.mobile}
                />
              </div>

              <div className="form_data">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="At least 6 character"
                  id="password"
                  onChange={adddata}
                  value={udata.password}
                />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword"> Confirm Password</label>
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Your Password"
                  id="cpassword"
                  onChange={adddata}
                  value={udata.cpassword}
                />
              </div>

              <button className="signin_btn"> Continue</button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Sign here</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
