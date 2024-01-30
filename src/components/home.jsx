import React from "react";
import '../styles/home.css'

export default function Home () {
    return (
       <section id="intro">
        <div className="intromain">
           <div className="intro">
            <span className="hello ">Hello,</span>
            <span className="introwords1"> I'm <span class='intro2'>Evan</span><br /></span>
            <span className="afull">A Full Stack Web Developer.</span>
           </div>
           {/* <button className="aboutme">
            More About me
           </button> */}
        

        
        </div>


       </section>
       
    )
}