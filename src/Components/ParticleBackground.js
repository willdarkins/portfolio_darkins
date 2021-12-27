import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../Config/particle-config";

function ParticleBackground() {
    return (
        <>
         <Particles width="100%" height="100vh" params={particlesConfig}/>   
        </>
    )
}

export default ParticleBackground
