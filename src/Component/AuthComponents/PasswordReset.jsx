import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./Auth.css"
import { ResetPassword } from '../../Redux/Actions/Actions';

const PasswordReset = () => {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let [state, setState] = useState({
        email:"",
    })
    let { email } = state;

    let handleChange = e => {
      let { name, value } = e.target;
      setState({ ...state, [name]: value });
    };

    let handleSubmit = async e => {
        e.preventDefault();
        try {
            dispatch(ResetPassword(email));
            toast.success(`successfully password send to your ${email}`)
            navigate("/login")
        }
        catch (err) {
            
        }
    }
    return (
      <div id="pass">
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
         
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={handleSubmit}
          >
            Send
          </button>
      
        </form>
      </div>
    );
}

export default PasswordReset
