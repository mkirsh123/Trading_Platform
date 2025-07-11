import React from "react";

function Pricing() {
  return (
    <div>
      <div className="container pt-5 pb-5 mb-5">
        <div className="row">
          <div className="col-6">
            <h2 className="mb-4">Unbeatable pricing</h2>
            <p className="text-muted mb-4">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="/" style={{ textDecoration: "none" }}>
              See pricing{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="col-6">
            <div className="row text-center">
              <div className="col-4">
                <img
                  className="pl-5"
                  src="media\images\pricingEquity.svg" alt=""
                  style={{ width: "50%" }}
                />
                <p className="text-muted fs-6">Free account opening</p>
              </div>
              <div className="col-4">
                <img
                  src="media\images\pricingEquity.svg" alt=""
                  style={{ width: "50%" }}
                />
                <p className="text-muted fs-6">
                  Free equity delivery <br />
                  and direct mutual funds
                </p>
              </div>
              <div className="col-4">
                <img
                  src="media\images\intradayTrades.svg" alt=""
                  style={{ width: "50%" }}
                />
                <p className="text-muted fs-6">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
