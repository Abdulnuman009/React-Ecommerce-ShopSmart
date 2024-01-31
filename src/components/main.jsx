import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/background.png"
            alt="Card"
            height={400}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container" style={{color:"black"}}>
              <h5 className="card-title fs-1 text fw-lighter">Welcome to ShopSmart – Your Ultimate Destination for Stylish Living!</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Discover a world of endless possibilities with our curated collection of high-quality products, bringing style and convenience to your fingertips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
