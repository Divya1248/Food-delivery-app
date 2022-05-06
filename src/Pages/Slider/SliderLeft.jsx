import React from "react";

const SliderLeft = () => {
  return (
    <div className="sliderLeftBlock">
      <p>You’ll love us even more on the app!</p>
      <h1>Flat ₹200 OFF</h1>
      <h3>on first app order</h3>

      <p className="couponCode">
        Code: MEAL200 <i className="fal fa-copy"></i>
      </p>
      <div className="storeBlock">
        <img
          src="https://d2pc4443o2qatl.cloudfront.net/20211219163847/assets/images/app-store.png"
          alt="Apple Store"
        />
        <img
          src="https://d2pc4443o2qatl.cloudfront.net/20211219163847/assets/images/google-play.png"
          alt="Play Store"
        />
      </div>
    </div>
  );
};

export default SliderLeft;
