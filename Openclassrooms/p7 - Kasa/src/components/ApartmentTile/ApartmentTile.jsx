import React from "react";
import "./ApartmentTile.scss";
import { Link } from "react-router-dom";
import "./ApartmentTile.scss";

function ApartmentTile(props) {
  return (
    <Link
      to="/flat"
      state={{
        apartmentId: props.id
      }}
    >
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default ApartmentTile;
