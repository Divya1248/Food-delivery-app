import React from "react";
import "./Food.css";

const FoodPage = () => {
  return (
    <div>
      <div className="searchBlock">
        <form>
          <div id="inputBlock">
            <h1>Quick Eats</h1>
            <input
              type="text"
              name="location"
              placeholder="Search Location"
              className="searchLeft"
            />
            <i class="fas fa-map-marker-alt"></i>

            <input
              type="text"
              name="food"
              placeholder="Search Food"
              className="searchRight"
            />
            <i class="fas fa-search" style={{ left: "580px" }}></i>
          </div>
        </form>
      </div>

      <section className="deliveryBlock">
        <article>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.DrJx7TuzS4K3-AWQGM0-pwHaE5&pid=Api&P=0&w=232&h=154"
            alt=""
          />
          Delivery
        </article>
      </section>
    </div>
  );
};

export default FoodPage;
