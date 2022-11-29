import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => {
  return (
    <>
      <Icon
        icon={locationIcon}
        className="pin-icon"
        style={{ width: "30px", height: "30px" }}
      />
      <p className="pin-text">{text}</p>
    </>
  );
};
const Map = ({ location }) => {
  const cordinate = {
    address: location["Property Address"],
    lat: location.Y,
    lng: location.X,
  };
  return (
    <div style={{ height: "60vh", width: "80%" }}>
      {location.Y ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }} //This practise is not advisable tho
          defaultCenter={cordinate}
          defaultZoom={11}
        >
          <LocationPin
            lat={cordinate.lat}
            lng={cordinate.lng}
            text={cordinate.address}
          />
        </GoogleMapReact>
      ) : null}
    </div>
  );
};

export default Map;
