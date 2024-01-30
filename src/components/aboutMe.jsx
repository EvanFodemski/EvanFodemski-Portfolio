import React from "react";
import "../styles/about.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function About() {
  const mapStyles = {
    height: "600px",
    width: "50%", // Set the width to 50%
    float: "right" // Float the map to the right
  };

  const defaultCenter = {
    lat: 38.83388137817383,
    lng: -104.82170867919922
  };

  const markers = [
    {
      position: {
        lat: 38.83388137817383,
        lng: -104.82170867919922
      },
      title: "My location"
    }
  ];

  return (
    <div>
      <LoadScript
        googleMapsApiKey="AIzaSyCAal-VvsBtnpCh4Z5N3efas6pHmmR3wrA"
        libraries={["maps", "marker"]}
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={9}
          center={defaultCenter}
          mapId="DEMO_MAP_ID"
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position} title={marker.title} />
          ))}
        </GoogleMap>
      </LoadScript>

      <div className="abtwriting">
        <h1>About Evan Fodemski</h1>
        <p className="p1">
          Hey, I'm Evan Fodemski, and let me share my coding journey. Graduating high school in Colorado Springs in 2023, 
          I ventured into the Denver University full-stack coding bootcamp that summer. The challenge and creativity instantly hooked me, 
          turning coding from a curiosity into a genuine passion. It became the medium through which I could bring my ideas to life. 
          Now equipped with a solid coding foundation, I'm determined to turn this passion into a fulfilling career. 
          From high school grad to coding enthusiast, I'm on a path to make my mark in the ever-evolving tech world. 
        </p>
        <br />
      
      </div>
    </div>
  );
}