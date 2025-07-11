import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="fs-3 text-center">Founder</h1>
      </div>
      <div className="row p-5" style={{ lineHeight: "1.8", fontSize: "1em" }}>
        <div className="col-6">
          <img
            src="media/images/Rkphoto1.jpg" alt=""
            style={{ borderRadius: "100%", width: "50%", marginLeft: "100px" }}
          />
          <br />
          <br />
          <h4 style={{ marginLeft: "150px" }}>Rama Krishna</h4>
          <h5 style={{ marginLeft: "150px" }}>Founder, CEO</h5>
        </div>
        <div className="col-6">
          <p>
            Rama Krishna is a B.Tech student in Electronics and Communication
            Engineering at NIT Warangal. Passionate about coding, hardware
            design, and solving real-world problems, he enjoys working on
            projects that blend software and electronics.
          </p>
          <p>
            RamaKrishna Trading was created to make investing simpler,
            transparent, and accessible to everyone. Whether you’re a beginner
            or an experienced trader, our platform offers resources, tools, and
            insights to help you trade with confidence.
          </p>
          <p>
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
