import React from "react";
import { Link } from "react-router-dom";
import "./restaurant.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchfoods } from "../../Redux/Actions/Createaction";
import { Increement } from "./../../Redux/Actions/Createaction";

const Restaurant = () => {
  let dispatch = useDispatch();
  let Selector = useSelector(state => state.Createreducer.Upload_user);
  let select = useSelector(state => console.log(state));
  console.log(select);

  let handleClick = () => {
    dispatch(fetchfoods());
  };
  let data = [...Selector];

  let CartIncreement = food => {
    dispatch(Increement(food));
  };

  return (
    <>
      <div>
        <div className="RestBlock">
          <div className="leftimg">
            <h3>QuickEats Restaurant Booking Order</h3>
          </div>
          <button onClick={handleClick} className="Upload">
            Choose items
          </button>
          <div className="rightimg">
            <img src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-32st6cqrage039u9a8kgb9bl77-20170322231219.Medi.jpeg" />
          </div>
        </div>
      </div>
      <div id="items">
        {data.map(e => (
          <section className="itemBlock">
            <article>
              <main>
                <h1>{e.title}</h1>
                <p>Price:${e.price}</p>
                <img src={e.poster} alt="" />
                {/* <button
                  className="btn"
                  style={{
                    border: "1px solid #111",
                    boxShadow: "1px 1px 1px #ffff",
                  }}
                  onClick={_ => CartIncreement(-1)}
                >
                  -
                </button> */}
                <button
                  className="btn btn-primary "
                  onClick={_ => CartIncreement(1)}
                >
                  Add to cart
                </button>
                {/* <button
                  className="btn"
                  style={{
                    border: "1px solid #111",
                    boxShadow: "1px 1px 1px #ffff",
                  }}
                  onClick={_ => CartIncreement(1)}
                >
                  +
                </button> */}
              </main>
            </article>
          </section>
        ))}
      </div>
    </>
  );
};

export default Restaurant;
