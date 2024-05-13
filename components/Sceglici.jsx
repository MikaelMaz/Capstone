import React from "react";
import Image from "next/image";
import "./scegli.css";
import Mecanics from "../public/img/mecanics.jpg";
import Link from "next/link";

const Sceglici = () => {
  return (
    <>
      <div className="container p-0">
        <p className="h1 ps-3 bordazz my-5 fw-light">Perchè Sceglierci</p>
      </div>
      <div className="bg-light container py-5 ombra px-5">
        <div className="row gx-5">
          <div className="col-lg-6 d-flex flex-column justify-content-center order-lg-first order-last">
            <p className="sceglici-titolo">Esperienza, Qualità e Passione</p>
            <p className="paragrafo-sceglici mx-auto">
              Affidarsi a noi è una scelta che premia l'
              <span className="bald">esperienza</span> e la{" "}
              <span className="bald">qualità</span>. Qui,{" "}
              <span className="bald">ogni moto</span> è{" "}
              <span className="bald">più di un semplice mezzo</span> di
              trasporto: <span className="bald">è un compagno di viaggio</span>{" "}
              che merita cura e attenzione. Grazie alla nostra{" "}
              <span className="bald">decennale esperienza</span> nel settore,
              garantiamo un servizio di{" "}
              <span className="bald">manutenzione</span> e{" "}
              <span className="bald">riparazione</span> di alto livello, frutto
              di <span className="bald">anni di dedizione</span> e{" "}
              <span className="bald">passione</span> per il mestiere. Scegliere
              noi significa scegliere <span className="bald">esperienza</span>,{" "}
              <span className="bald">qualità</span> e{" "}
              <span className="bald">passione</span>.
            </p>
            <div className="sceglici-relativo">
              <Link href="/chisiamo" className="text-decoration-none">
                <p className="m-0 sceglici-link">
                  Scopri di più <i className="bi bi-arrow-right"></i>
                </p>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <Image
              src={Mecanics}
              className="immagine-sceglici ombra mx-auto"
              alt="..."
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sceglici;
