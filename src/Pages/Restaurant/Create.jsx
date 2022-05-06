import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FetchPosts } from "./../../Redux/Actions/Createaction";
import "./restaurant.css";
import { useNavigate } from 'react-router-dom';


const Create = () => {
  let navigate=useNavigate()
  let dispatch = useDispatch();
  let [state, setstate] = useState({
    audio_title: "",
    price: "",
  //  category:"",
    // audio_poster: "",
  });

  let { audio_title, price, category } = state;

  let [Poster, setPoster] = useState("");
  let handleChange = e => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  let handlePoster = e => {
    setPoster({ [e.target.name]: e.target.files[0] });
  };
  let handleSubmit = e => {
    e.preventDefault();
    try {
      dispatch(FetchPosts(Poster, state));
      navigate("/Restaurant")
    } catch (err) {}
  };
  return (
    <section className="Head">
      <h3>Add your own food items</h3>
      <div className="formBlock">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="audio_title"
              required
              value={audio_title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="title">Price</label>
            <input
              type="text"
              name="price"
              required
              value={price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="title">Category</label>
            <input
              type="radio"
              name="veg"
              value={category}
              onChange={handleChange}
            />
            Veg
            <input
              type="radio"
              name="non_veg"
              value={category}
              onChange={handleChange}
            />
            Non-Veg
          </div>
          <div>
            <label htmlFor="audio_poster">Poster</label>
            <input
              type="file"
              name="audio_poster"
              // value={audio_poster}
              onChange={handlePoster}
            />
          </div>

          <div>
            <button onSubmit={handleSubmit}>
             Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Create;
