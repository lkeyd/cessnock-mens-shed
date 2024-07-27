import React from "react";
import InfoCard from "./InfoCard";

export default function InfoPortal() {
  return (
    <div className="flex flex-col lg:flex-row px-8 gap-8 py-16 border-b">
      <InfoCard
        route="/shed"
        title="The Shed"
        image="/workshed.jpg"
        alt="workshed"
      ></InfoCard>
      <InfoCard
        route="/garden"
        title="The Garden"
        image="/garden.jpg"
        alt="garden"
      ></InfoCard>
      <InfoCard
        route="/location"
        title="Location"
        image="/shedlocation.png"
        alt="location"
      ></InfoCard>
    </div>
  );
}
