import React from "react";

function Awards() {
  return (
    <div className="container pt-5 pb-4 mb-5">
      <div className="row">
        <div className="col-6 p-3 mr-5">
          <img src="media/images/largestBroker.svg " alt="Brokers" />
        </div>
        <div className="col-6 p-3 mr-5">
          <h1>Largest Stock broker in India</h1>
          <p className="mt-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row mb-5 mt-5">
            <div className="col">
              <ul>
                <p>
                  <li>Futures and Options</li>
                </p>
                <p>
                  <li>Commodity derivatives</li>
                </p>
                <p>
                  <li>Currency derivatives</li>
                </p>
              </ul>
            </div>
            <div className="col">
              <ul>
                <p>
                  <li>Stocks & IPOs</li>
                </p>
                <p>
                  <li>Direct mutual funds</li>
                </p>
                <p>
                  <li>Bonds and Go</li>
                </p>
              </ul>
            </div>
          </div>
          <img
            src="media\images\pressLogos.png"
            alt="press Logo"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
