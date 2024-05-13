import React from "react";
import "./hero.css";
import Link from "next/link";

const Herosection = () => {
  return (
    <div className="heroback">
      <div className="overlay">
        <p className="hero-text">
          ESPERIENZA, QUALITÀ E PASSIONE: <br />{" "}
          <span>LA TUA MOTO, IL NOSTRO IMPEGNO.</span>
        </p>
        <div className="separator w-75"></div>
        <Link href="/contatti" className="text-decoration-none">
        <div className="hero-btn"><span>RICHIEDI SUBITO UN PREVENTIVO!</span></div>
        </Link>
      </div>
      
    </div>
  );
};

export default Herosection;
