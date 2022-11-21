import React, { useState } from "react";
import DetailsPage from "./DetailsPage";
import TitleListPage from "./TitleListPage";

const View = () => {
  const [view, setView] = useState("list");
  const [details, setDetails] = useState({});
  return (
    <div className="list-container">
      {view === "list" ? (
        <TitleListPage setView={setView} setDetails={setDetails} />
      ) : (
        <DetailsPage setView={setView} details={details} />
      )}
    </div>
  );
};

export default View;
