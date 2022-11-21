import React from "react";
import Map from "../Map";
import Details from "./Details";
import "./details.css";

const DetailsPage = ({ setView, details }) => {
  return (
    <div className="details-container">
      <Details location={details} setView={setView} />
      <Map location={details} />
    </div>
  );
};

export default DetailsPage;
