import React from "react";

function CreateTicket() {
  const Mystyle = {
    textDecoration: "none",
    lineHeight: "2",
    fontSize: "18px",
    marginLeft: "30px",
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-muted fs-3 mb-5">
          To create a ticket, select a relevant topic
        </h1>
      </div>
      <div className="row mb-5">
        <div className="col">
          <h5 className="mb-2">
            {" "}
            <i class="fa fa-plus-circle" aria-hidden="true"></i> &nbsp;Account
            Opening
          </h5>
          <a href="/" style={Mystyle}>
            Resident individual
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Minor
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Non Resident Indian (NRI)
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Company,Partnership, HUF and LLP
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Glossary
          </a>{" "}
          <br />
        </div>
        <div className="col">
          <h5 className="mb-2">
            <i class="fa fa-user-o" aria-hidden="true"></i> &nbsp;Your Trading
            Account
          </h5>
          <a href="/" style={Mystyle}>
            Your Profile
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Account modification
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Client Master Report (CMR)
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Nomination
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Transfer and conversion of securities
          </a>{" "}
          <br />
        </div>
        <div className="col">
          <h5 className="mb-2">
            <i class="fa fa-line-chart" aria-hidden="true"></i> &nbsp;Kite
          </h5>
          <a href="/" style={Mystyle}>
            IPO
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Trading FAQs
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Margin Trading Facility (MTF) and Margins
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Charts and orders
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Alerts and Nudges
          </a>{" "}
          <br />
        </div>
      </div>
      <div className="row mt-5" style={{ marginBottom: "150px" }}>
        <div className="col">
          <h5 className="mb-2">
            <i class="fa fa-credit-card" aria-hidden="true"></i> &nbsp;Funds
          </h5>
          <a href="/" style={Mystyle}>
            Add money
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Withdraw money
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Add bank accounts
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            eMandates
          </a>{" "}
          <br />
        </div>
        <div className="col">
          <h5 className="mb-2">
            {" "}
            <i class="fa fa-opera" aria-hidden="true"></i> &nbsp;Console
          </h5>
          <a href="/" style={Mystyle}>
            Portfolio
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Corporate actions
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Funds statement
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Reports
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Profile
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Segments
          </a>{" "}
          <br />
        </div>
        <div className="col">
          <h5 className="mb-2">
            {" "}
            <i class="fa fa-circle-o-notch" aria-hidden="true"></i> &nbsp;Coin
          </h5>
          <a href="/" style={Mystyle}>
            Mutual funds
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            National Pension Scheme (NPS)
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Fixed Deposit (FD)
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Features on Coin
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            Payments and Orders
          </a>{" "}
          <br />
          <a href="/" style={Mystyle}>
            General
          </a>{" "}
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
