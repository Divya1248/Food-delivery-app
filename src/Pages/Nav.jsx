import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

import Restaurant from "./Restaurant/Restaurant";
import { useSelector } from 'react-redux';




const NavBar = () => {
  let cart = useSelector(state => state. Createreducer.cart_user)
  // console.log(cart);
 
  return (
    <section className="Navblock">
      <article>
        <div className="Leftblock">
          <img src="https://www.logolynx.com/images/logolynx/s_d1/d1893eff2b5c68d88a3dc690a02ffeb0.png" />
          
            <h1>uickEats</h1>
         
        </div>
        <div className="Rightblock">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/restaurant">Cart
                <sup><span className="badge badge-secondary" style={{ fontSize: "15px", color: "crimson" }}>{cart}</span></sup></Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default NavBar;
