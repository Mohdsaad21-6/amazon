import { NavLink } from "react-router-dom";
import "./signup.css";
import { useState } from "react";

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

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="amazon logo"></img>
          </div>
          <div className="sign_form">
            <form>
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
              <button className="signin_btn"> Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New To Amazon</p>
            <NavLink to="/register">
              {" "}
              <button>Create Your amazon account</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_in;
