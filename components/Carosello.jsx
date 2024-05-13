import React from "react";
import "./carosell.css";
import Image from "next/image";
import Aprilia from "../public/img-carosello/aprilia.svg";
import BMW from "../public/img-carosello/bmw.svg";
import Ducati from "../public/img-carosello/ducati.svg";
import Honda from "../public/img-carosello/honda.svg";
import Husqvarna from "../public/img-carosello/husqvarna.svg";
import Kawasaki from "../public/img-carosello/kawasaki.svg";
import Ktm from "../public/img-carosello/ktm.svg";
import Piaggio from "../public/img-carosello/piaggio.svg";
import Suzuki from "../public/img-carosello/suzuki.svg";
import Yamaha from "../public/img-carosello/yamaha.svg";

const Carosello = () => {
  return (
    <div className="logos margine-sopra">
      <div className="logos-slide">
        <Image src={Aprilia} alt="..." className="grandezza4"/>
        <Image src={BMW} alt="..." className="grandezza" />
        <Image src={Ducati} alt="..." className="grandezza"/>
        <Image src={Husqvarna} alt="..." className="grandezza"/>
        <Image src={Honda} alt="...." className="grandezza2"/>
        <Image src={Piaggio} alt="..." className="grandezza"/>
        <Image src={Kawasaki} alt="..." className="grandezza3"/>
        <Image src={Suzuki} alt=".." className="grandezza5"/>
        <Image src={Ktm} alt=".." className="grandezza6"/>
        <Image src={Yamaha} alt="..." className="grandezza"/>
      </div>
      <div className="logos-slide">
        <Image src={Aprilia} alt="..." className="grandezza4"/>
        <Image src={BMW} alt="..." className="grandezza"/>
        <Image src={Ducati} alt="..." className="grandezza"/>
        <Image src={Husqvarna} alt="..." className="grandezza"/>
        <Image src={Honda} alt="...." className="grandezza2"/>
        <Image src={Piaggio} alt="..." className="grandezza"/>
        <Image src={Kawasaki} alt="..." className="grandezza3"/>
        <Image src={Suzuki} alt=".." className="grandezza5"/>
        <Image src={Ktm} alt=".." className="grandezza6"/>
        <Image src={Yamaha} alt="..." className="grandezza"/>
      </div>
    </div>
  );
};

export default Carosello;
