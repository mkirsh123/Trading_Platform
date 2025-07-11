import React from "react";

function Brokerage() {
  return (
    <div className="container  text-center">
      <div className="row p-5 mt-5 border-top">
        <div className="col-8 p-4">
          <a href="/" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 mb-5">Brokerage calculator</h3>
          </a>
          <ul
            style={{
              listStyleType: "none",
              textAlign: "left",
              lineHeight: "1.8",
              fontSize: "12px",
            }}
            className="text-muted"
          >
            <li style={{ marginBottom: "10px" }}>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Digital contract notes will be sent via e-mail.
            </li>
            <li style={{ marginBottom: "10px" }}>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li style={{ marginBottom: "10px" }}>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li style={{ marginBottom: "10px" }}>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li style={{ marginBottom: "10px" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="/" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 mb-5">List of charges</h3>
          </a>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
              textAlign: "left",
              lineHeight: "1.8",
              fontSize: "12px",
            }}
            className="text-muted"
          >
            <li style={{ marginBottom: "8px" }}>
              Call & Trade and RMS auto-squareoff: ₹50 + GST per order.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Digital contract notes sent via email.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Physical contract notes: ₹20 each. Courier charges apply.
            </li>
            <li style={{ marginBottom: "8px" }}>
              NRI (non-PIS): 0.5% or ₹100 per order (whichever is lower).
            </li>
            <li style={{ marginBottom: "8px" }}>
              NRI (PIS): 0.5% or ₹200 per order (whichever is lower).
            </li>
            <li style={{ marginBottom: "8px" }}>
              Debit balance: ₹40 per order instead of ₹20.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
