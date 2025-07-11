import React from "react";

function Leftimage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-5 mb-5">
      <div className="row ">
        <div className="col-6 pt-3">
          <img src={imageURL} alt=""/>
        </div>
        <div className="col-2"></div>
        <div className="col-4 pt-5">
          <br></br> <br></br>
          <h1 className="mb-4">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div>
            <br />
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="googlePlay" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href={appStore}>
              <img src="media/images/appStoreBadge.svg" alt="appStore" />
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Leftimage;
