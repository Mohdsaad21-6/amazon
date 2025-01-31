import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });
  // console.log(udata);

  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata(() => {
      return { ...udata, [name]: value };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata;

    const res = await axios.post(
      "http://localhost:8005/register",
      {
        fname,
        email,
        mobile,
        password,
        cpassword,
      },
      { withcredentials: true }
    );

    const data = await res.data;
    // console.log(data);

    //BUG WAS HERE IN THE BELOW LINE OF CODE
    if (res.status === 422 || !data) {
      // window.alert("Invalid Registration");
      toast.warn("Invalid Registration", { position: "top-center" });
    } else {
      // window.alert("Registration Successful");
      toast.success("Registration Successful", {
        position: "top-center",
      });
      setUdata({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
      });
    }
  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazon logo"></img>
          </div>
          <div className="sign_form">
            <form method="POST">
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

              <button className="signin_btn" onClick={senddata}>
                {" "}
                Continue
              </button>
              <div className="signin_info">
                <p>Already have an account?</p>
                <NavLink to="/login">Sign here</NavLink>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default SignUp;
