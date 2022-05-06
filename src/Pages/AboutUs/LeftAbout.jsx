import React from 'react'

const LeftAbout = () => {
    return (
      <div className="LeftBlock">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src="./card1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">100+ Meals</h1>
                            <p className="card-text">served & we are not stopping!  please come to Quick eats.
                            </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="./card2.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">10+ Stores</h1>
                <p className="card-text">
                  across Bangalore, Andhrapradesh , chennai & Hyderabad.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="./card3.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">28 Minutes</h1>
                <p className="card-text">
                  Superfast Delivery. We reach you before the hunger does.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="./card4.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title">
                  4.5
                  <span>
                   <img src="https://d2pc4443o2qatl.cloudfront.net/20211219163847/assets/images/yellow_star.svg"/>
                  </span>
                </h1>
                <p className="card-text">
                  rated & 1000+ 5 star reviews that keep us motivated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LeftAbout
