import { NavLink } from "react-router-dom";

const SignUp = () => {
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
                />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  id="email"
                />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile Number</label>
                <input
                  type="number"
                  name="mobile"
                  placeholder="Enter Your Number"
                  id="mobile"
                />
              </div>

              <div className="form_data">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="At least 6 character"
                  id="password"
                />
              </div>
              <div className="form_data">
                <label htmlFor=""> Confirm Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm Your Password"
                  id="password"
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
