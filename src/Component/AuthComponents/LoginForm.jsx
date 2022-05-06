import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { GoogleAuth, GoogleProvider, logIn } from "../../Redux/Actions/Actions";
import { toast } from "react-toastify";
import AuthReducer from "./../../Redux/Reducers/AuthReducer";

const Loginorm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let value = useSelector(
    async state => await state.AuthReducer.loginUser);
  let Gvalue = useSelector(
    async state => await state.AuthReducer.GoogleAuth.user.emailVerified);
  
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let { email, password } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // Google
  let HandleClick =async provider => {
    try {
      dispatch(GoogleAuth(provider));
      await Gvalue.then(e =>
        e===true ? window.location.assign("/"): navigator("/login"))
    } catch (err) {}
  };
  let handleSubmit = e => {
    e.preventDefault();
    try {
      dispatch(logIn(email, password));
      // value.then(a => 
      //   a===true ? window.location.assign("/Restaurant"): navigator("/login"))
    } catch (error) {
      toast.error("failed to log in");
      console.log(error);
    }
  };
  return (
    <section>
      <div className="logBlock">
        <div className="Main">
          <h1 style={{ textAlign: "center" }}>Login Here</h1>

          <div className="container col-md-4">
            <div className="btnBlock">
              <button
                className="btn1"
                onClick={() => {
                  HandleClick(GoogleProvider);
                }}
              >
                GOOGLE
              </button>

              <button className="btn2">
                <Link to="/PhoneAuth">PHONE NUMBER</Link>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={email}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onSubmit={handleSubmit}
              >
                Login
              </button>
              <div>
                <Link to="/passwordreset">Forgot password</Link>
              </div>
            </form>
            <button className="Sign">
              <Link to="/signup">Signup</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loginorm;
