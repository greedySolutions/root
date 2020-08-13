import React from 'react'
import one from "./../../public/img/intro-carousel/1.jpg";
import two from "./../../public/img/intro-carousel/2.jpg";
import three from "./../../public/img/intro-carousel/3.jpg";
import fore from "./../../public/img/intro-carousel/4.jpg";
import five from "./../../public/img/intro-carousel/5.jpg";

function Intro() {
    return (
        <section id="intro">

            <div className="intro-content">
                <h2>Making <span>your ideas</span><br/>happen!</h2>
                <div>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                    <a href="#portfolio" className="btn-projects scrollto">Our Projects</a>
                </div>
            </div>

            <div id="intro-carousel" className="owl-carousel" >
                <div className="item" style={{backgroundImage: one}}></div>
                <div className="item" style={{backgroundImage: two}}></div>
                <div className="item" style={{backgroundImage: three}}></div>
                <div className="item" style={{backgroundImage: fore}}></div>
                <div className="item" style={{backgroundImage: five}}></div>
            </div>

        </section>
    )
}

export default Intro
