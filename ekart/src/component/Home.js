import React from "react";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <>
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img src="/assets/bg.png" class="card-img" alt="..." height="550px" />
        <div class="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 class="card-title display-4 fw-bolder mb-0">
              NEW SEASONS ARRIVALS
            </h5>
            <p class="card-text lead fs-2">CHECK OUT ALL THE TREND</p>
          </div>
        </div>
      </div>
      <ProductList/>
    </div>

    </>
  );
};

export default Home;
