import React from "react";

function Rightimage({ imageURL, productName, productDescription, learnMore }) {
  return (
    <div className="container ">
      <div className="row ">
        <div className="col-4 pt-5">
          <br></br> <br></br>
          <h1 className="mb-4">{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-7">
          <img src={imageURL} alt=""/>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default Rightimage;
