import { NavLink } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";


const Sign_in = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  console.log(data);

  const adddata = (e) => {
    const { name, value } = e.target;
    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  //ADD FORM VALIDATION HERE AND ALSO ADD A TOAST MESSAGE AND IN THE REGISTER PAGE ALSO

  const senddata = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    const res = await axios.post(
      "http://localhost:8005/login",
      {
        email,
        password,
      },
      { withcredentials: true }
    );
    const logdata = await res.data;

    console.log(logdata);
    

    //BUG WAS HERE IN THE BELOW LINE OF CODE toast.warn was not working in also in the register page

    if (res.status === 400 || !data) {
      console.log("Invalid Login");
      toast.warn("Invalid Login", { position: "top-center" });
    } else {
      console.log("Login Successful");
      toast.success("Login Successful", { position: "top-center" });
      setData({
        email: "",
        password: "",
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
              <h1>Sign In</h1>
              <div className="form_data">
                <label htmlFor="" name="email" id="eamail">
                  Email
                </label>
                <input
                  onChange={adddata}
                  value={data.email}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter a valid email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="">Password</label>
                <input
                  onChange={adddata}
                  value={data.password}
                  type="password"
                  name="password"
                  placeholder="At least 6 character"
                  id="password"
                />
              </div>
              <button className="signin_btn" onClick={senddata}> Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New To Amazon</p>

            <button>
              {" "}
              <NavLink to="/register">Create your Amazon Account</NavLink>
            </button>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Sign_in;
