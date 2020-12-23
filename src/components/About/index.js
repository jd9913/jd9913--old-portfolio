import React from 'react';
import selfImage from "../../assets/images/self/self-portrait.jpg";

function About(){
    return(
        <section className="my-5">
            <h1 id='about'> About Me</h1>
            <img src={selfImage} className="my-2" style={{width: "25%"}} alt="self-portrait"/>
        </section>
    );
}

export default About;