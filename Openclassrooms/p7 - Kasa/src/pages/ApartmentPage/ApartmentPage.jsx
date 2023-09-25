import React, { useEffect, useState } from "react";
import { DescriptionPanel } from "../../components/DescriptionPanel/DescriptionPanel.jsx";
import "./ApartmentPage.scss";
import { ImageBanner } from "../../components/ImageBanner/ImageBanner.jsx";
import { useApartment } from "../../hooks/useApartment.jsx";

function ApartmentPage() {
  const flat = useApartment();

  if (flat == null) return <div>Loading...</div>;
  return (
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} isApartmentPage={true} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
