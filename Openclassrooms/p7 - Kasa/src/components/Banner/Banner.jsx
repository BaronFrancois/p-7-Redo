import React from "react";
import "./Banner.scss";

function Banner({ image, titleDesktop, titleMobile }) {
  return (
    <div className="banner">
      <img src={image} alt="" />
      {titleDesktop && <h2 className="desktop">{titleDesktop}</h2>}
      {titleMobile && <h2 className="mobile" dangerouslySetInnerHTML={{ __html: titleMobile }}></h2>}
    </div>
  );
}

export default Banner;


