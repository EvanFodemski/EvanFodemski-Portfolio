import React from "react";
import "../styles/about.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'



export default function About() {

  const position = [38.8176, -104.8321]

  return (
    <div className="aboutcontainer">
      <div >
        <MapContainer className="mapcontainer" center={position} zoom={11.5} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>,
      </div>
      
    </div>
  )

}



{/* <div className="abtwriting">
        <h1>About Evan Fodemski</h1>
        <p className="p1">
          Hey, I'm Evan Fodemski, and let me share my coding journey. Graduating high school in Colorado Springs,
          I ventured into the Denver University full-stack coding bootcamp that summer. The challenge and creativity instantly hooked me,
          turning coding from a curiosity into a genuine passion. It became the medium through which I could bring my ideas to life.
          Now equipped with a solid coding foundation, I'm determined to turn this passion into a fulfilling career.
          From high school grad to coding enthusiast, I'm on a path to make my mark in the ever-evolving tech world.
        </p>
        <br />

      </div> */}