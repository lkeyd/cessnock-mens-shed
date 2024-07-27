import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import InfoPortal from "./components/InfoPortal";

export default function page() {
  return (
    <div className="w-full flex justify-center">
      <div className=" w-full max-w-7xl">
        <Hero></Hero>
        <InfoPortal></InfoPortal>
      </div>
    </div>
  );
}
