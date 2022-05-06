import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Auth.css"
import { PhoneNumber } from "./../../Redux/Actions/Actions";
import { toast } from "react-toastify";

const Phone = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [state, setState] = useState({
      phone: "",
     
  });
  let {phone } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      dispatch(PhoneNumber(phone));
      // toast.success("successfully otp sended");
      // navigate("/")
    } catch (err) {}
  };
  return (
    <div className="container col-md-4" id="call">
      <form onSubmit={handleSubmit}>
        <div className="mb-1" >
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Phone number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div id="recaptcha-container"></div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
     
    </div>
  );
};

export default Phone;
