import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "./../../Redux/Actions/Actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let [state, setState] = useState({
    email: "",
    password: "",
    name: "",
    gender:"",
  });
  let { email, password ,name, gender} = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = e => {
    e.preventDefault();
    try {
      dispatch(createUser(email, password));
      let message = `A verification message has been sent to ${email} and verify and login`;
      toast.success(message);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6" style={{ marginTop: "-40px", width: "500px"}}>
            <div className="card rounded-3">
              <img
                src="https://assets0.dostuffmedia.com/uploads/aws_asset/aws_asset/5045084/760706d7-34bb-4b6b-bc78-3d4cef8947e5.png"
                style={{
                  borderTopLeftRadius: ".3rem",
                  borderTopRightRadius: ".3rem",
                  height:"300px",
                }}
                alt="Sample photo"
              />
              <div className="card-body p-4 p-md-2">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-2 px-md-2">
                  SignUp Form
                </h3>
                <form className="px-md-2" onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example1q">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="enter your name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline datepicker">
                      <label
                        htmlFor="exampleDatepicker1"
                        className="form-label"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline datepicker">
                        <label
                          htmlFor="exampleDatepicker1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="enter a password"
                          value={password}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="col-md-6 mt-4 mb-4">
                        <select className="select">
                          <option value={gender} disabled>
                            Gender
                          </option>
                          <option value={gender}>Female</option>
                          <option value={gender}>Male</option>
                          <option value={gender}>Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-success btn-lg mb-1">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
