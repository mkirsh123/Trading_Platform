import React from "react";

function OpenAccount() {
  return (
    <div>
      <div className="container pt-5 pb-5 mb-5">
        <div className="row text-center">
          <h1 className="pb-4">Open a Trading account</h1>
          <p className="text-mutes pb-4 fs-5">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            onClick={() => window.location.href = "https://candid-cupcake-537f43.netlify.app/signup"}
            className="p-3 btn btn-primary fs-5"
            style={{ width: "20%", margin: "0 auto" }}
            >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
