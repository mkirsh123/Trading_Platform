import React from "react";

function Universe() {
  return (
    <div className="container m-5 p-5" style={{ marginLeft: "20px" }}>
      <div className="row text-center p-5">
        <h1>The Trading Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center p-3">
        <div className="col">
          <img src="media/images/Logo.png" style={{ width: "60%" }} alt=""></img>
          <p className="mt-3 text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
          <img
            src="media\images\sensibullLogo.svg" alt=""
            style={{ width: "60%" }}
          ></img>
          <p className="text-small text-muted" style={{ marginTop: "32px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col">
          <img src="media\images\tijori.svg" style={{ width: "30%" }} alt=""></img>
          <p className="text-small text-muted" style={{ marginTop: "32px" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-center p-3">
        <div className="col">
          <img src="media/images/streakLogo.png" style={{ width: "45%" }} alt=""></img>
          <p className="text-small text-muted" style={{ marginTop: "22px" }}>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col">
          <img
            src="media\images\smallcaseLogo.png" alt=""
            style={{ width: "45%" }}
          ></img>
          <p className="text-small text-muted" style={{ marginTop: "32px" }}>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col">
          <img src="media\images\dittoLogo.png" style={{ width: "30%" }} alt=""></img>
          <p className="text-small text-muted" style={{ marginTop: "32px" }}>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Universe;
