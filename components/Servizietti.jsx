import React from "react";
import "./service.css";
import Image from "next/image";
import Wrench from "../public/icone/iconawrench.svg";
import Gomme from "../public/icone/iconagomme.svg";
import Tuning from "../public/icone/iconamuscolo.svg";
import Link from "next/link";

const Servizietti = () => {
  return (
    <>
    <div className="container p-0">
        <p className="h1 ps-3 bordazz my-5 fw-light">I Nostri Servizi</p>
      </div>
    <div className="bg-light container py-5 ombra">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4 text-center p-0 custom-col">
          <div className="container cortino">
            <Image src={Wrench} alt="..." className="grandezza-icone" />
            <p className="servizietti-titolo">Riparazione e Tagliando</p>
            <p className="servizietti-paragrafo">
              Garantiamo riparazioni di qualità e tagliandi completi per
              mantenere la tua moto in ottime condizioni
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 text-center p-0 custom-col">
          <div className="container cortino">
            <Image src={Gomme} alt="..." className="grandezza-icone" />
            <p className="servizietti-titolo">Sostituzione Pneumatici</p>
            <p className="servizietti-paragrafo">
              Viaggia senza preoccupazioni, affidati alla nostra competenza
              nella sostituzione dei tuoi pneumatici
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 text-center p-0 custom-col">
          <div className="container cortino">
            <Image src={Tuning} alt="..." className="grandezza-icone" />
            <p className=" servizietti-titolo">Elaborazione e Tuning</p>
            <p className="servizietti-paragrafo">
              Con esperienza in tuning, miglioriamo la tua moto per
              un’esperienza di guida unica
            </p>
          </div>
        </div>
      </div>
      <div className="servizietti-relativo">
        <Link href="/servizi" className="text-decoration-none">
          <p className="m-0 servizietti-link">
            Tutti i servizi <i className="bi bi-arrow-right"></i>
          </p>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Servizietti;
