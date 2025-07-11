import React from "react";

function Education() {
  return (
    <div>
      <div className="container pb-5 pt-5 mb-5">
        <div className="row">
          <div className="col-6">
            <img
              src="media\images\education.svg"
              alt="education"
              style={{ width: "75%" }}
            />
          </div>
          <div className="col-6">
            <h1 className="fs-2 pb-4">Free and open market education</h1>
            <div className="row-6 pb-3">
              <p className="text-muted">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <a href="/" style={{ textDecoration: "none" }}>
                Varsity &nbsp;
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            <div className="row-6 pt-3">
              <p className="text-muted">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>
              <a href="/" style={{ textDecoration: "none" }}>
                TradingQ&A &nbsp;
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
