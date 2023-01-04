import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "HTML",
          "CSS",
          "REACT JS",
          "MANGO DB",
          "NODE JS",
          "EXPRESS JS"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;
