import React from "react";
import "./Homepage.scss";
import Banner from "../../components/Banner/Banner.jsx";
import ApartmentTile from "../../components/ApartmentTile/ApartmentTile.jsx";
import { useApartments } from "../../hooks/useApartments.jsx";


function ApartmentGrid() {
    const apartments = useApartments();
    return (
      <div className="grid">
        {apartments.map((apartment) => (
          <ApartmentTile
            title={apartment.title}
            imageUrl={apartment.cover}
            id={apartment.id}
            key={apartment.id}
          />
        ))}
      </div>
    );
}

function HomePage() {
  return (
    <div className="homepage">
      <Banner titleDesktop="Chez vous, partout et ailleurs" titleMobile="Chez vous,<br />partout et ailleurs" />
      <ApartmentGrid />
    </div>
  );
}

export default HomePage;
