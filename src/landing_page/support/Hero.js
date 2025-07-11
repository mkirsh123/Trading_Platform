import React from "react";

function Hero() {
  const Mystyle = {
    textDecoration: "underline",
    textUnderlineOffset: "10px",
    lineHeight: "2",
    fontSize: "18px",
    color: "white",
  };
  return (
    <section className="container-fluid mb-5 pb-5" id="supportHero">
      <div className="pt-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <h4>
          <a
            href="/"
            style={{
              lineHeight: "2",
              fontSize: "18px",
              color: "white",
            }}
          >
            Track Tickets
          </a>{" "}
        </h4>
      </div>
      <div className=" row pl-5 pr-5" id="supportWrapperInside">
        <div className=" col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O, why is my order getting rejected... "
            id="InputField"
          />
          <br />
          <a href="/" style={Mystyle}>
            Track account opening
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/" style={Mystyle}>
            Track segment activation
          </a>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/" style={Mystyle}>
            Intraday margins
          </a>{" "}
          <a href="/" style={Mystyle}>
            Kite user manual
          </a>{" "}
        </div>
        <div className=" col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a
                href="/"
                style={{ lineHeight: "2", fontSize: "18px", color: "white" }}
              >
                Quarterly Settlement of Funds - July 2025
              </a>
            </li>

            <li>
              <a
                href="/"
                style={{ lineHeight: "2", fontSize: "18px", color: "white" }}
              >
                {" "}
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>{" "}
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
