import React from "react";

const Details = ({ location, setView }) => {
  return (
    <div className="details">
      <button className="back-button" onClick={() => setView("list")}>
        {"<<back"}
      </button>
      <div className="title-tenure">
        <h2>{location["Title Number"]}</h2>
        <span>{location.Tenure}</span>
      </div>
      <p>{location["Property Address"]}</p>
    </div>
  );
};

export default Details;
