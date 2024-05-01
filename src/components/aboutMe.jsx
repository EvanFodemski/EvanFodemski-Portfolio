import React from "react";
import "../styles/about.css";
import { useState } from "react";
import { MapContainer, TileLayer, SVGOverlay, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'



export default function About() {

  const position = [38.8176, -104.8321]

  var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [28, 46],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [51, 51]
  });


  return (
    <div className="aboutcontainer">

      <div className="topheadabt">
        <h1 className="abth1">
          About Me
        </h1>
      </div>

      <div >
        <MapContainer className="mapcontainer" center={position} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={greenIcon} position={position}>



          </Marker>
        </MapContainer>
      </div>

      <div className="abtwritingcon">


        <div className="abtwriting">
  
          <p className="p1">
            I'm Evan Fodemski, and let me share my coding journey. Graduating high school in Colorado Springs,
            I ventured into the Denver University full-stack coding bootcamp that summer. The challenge and creativity instantly hooked me,
            turning coding from a curiosity into a genuine passion. It became the medium through which I could bring my ideas to life.
            Now equipped with a solid coding foundation, I'm determined to turn this passion into a fulfilling career.
            From high school grad to coding enthusiast, I'm on a path to make my mark in the ever-evolving tech world.
          </p>
          <br />

        </div>



      </div>

    </div>
  )

}


