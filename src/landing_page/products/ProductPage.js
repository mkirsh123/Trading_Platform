import React from "react";
import Hero from "./Hero";
import Leftimage from "./Leftimage";
import Rightimage from "./Rightimage";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <Leftimage
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        googlePlay="/"
        appStore="/"
      />
      <Rightimage
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Trading account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/"
      />
      <Leftimage
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="/"
        learnMore="/"
        googlePlay="/"
        appStore="/"
      />
      <Rightimage
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="/"
      />
      <Leftimage
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations.ntent is broken down into bite-size cards to help you learn on the go."
        tryDemo="/"
        learnMore="/"
        googlePlay="/"
        appStore="/"
      />
      <Universe />
    </>
  );
}

export default ProductPage;
