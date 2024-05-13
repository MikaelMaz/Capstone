import React from "react";
import "./servizi.css";
import Image from "next/image";
import Controllo from "../../public/img/controllo.jpg";
import Restauro from "../../public/img/restauro.png";
import Mecanics from "../../public/img/mecanics.jpg";
import Link from "next/link";

function servizi() {
  return (
    <div className="container pt-5">
      <div className="mb-4 pt-3 mt-3">
        <p className="fs-3 ps-3 py-0 mt-2 bordazz">I Nostri Servizi</p>
      </div>
      <div className="px-3">
        <div className="mb-5 row card-servizi">
          <div className="col-12 col-md-12 col-lg-6 p-0 h-75 order-lg-last edev">
            <Image src={Controllo} className="w-100 h-75 dimesiun" alt="..." priority />
          </div>
          <div className="col-12 col-md-12 col-lg-6 bg-light p-4 d-flex flex-column edev2">
            <h3 className="titolo mt-auto">Tagliando</h3>
            <p className="paragrafo mb-auto">
              Un controllo completo della tua moto per assicurare che tutto
              funzioni come dovrebbe. Questo include la verifica dei livelli
              dell’olio, la pulizia dei filtri dell’aria, il controllo dei freni
              e molto altro, aiutandoti a mantenere la tua moto in ottime
              condizioni e a prevenire problemi futuri.
            </p>
          </div>
        </div>
        <div className="mb-5 row card-servizi">
          <div className="col-12 col-md-12 col-lg-6 p-0 h-75 edev">
            <Image src={Mecanics} className="w-100 h-75 dimesiun" alt="..." priority />
          </div>
          <div className="col-12 col-md-12 col-lg-6 bg-light p-4 d-flex flex-column edev2">
            <h3 className="titolo mt-auto">Riparazione Completa</h3>
            <p className="paragrafo mb-auto">
              Dalla testa ai piedi, ogni componente della tua moto viene
              esaminato, per poter essere riparato o sostituito, assicurandoti
              la migliore tra le prestazioni. Che si tratti di un problema del
              motore, di un guasto all’impianto elettrico o di una sospensione
              difettosa, qui troverai l’assistenza di cui hai bisogno.
            </p>
          </div>
        </div>
        <div className="mb-5 row card-servizi">
          <div className="col-12 col-md-12 col-lg-6 order-lg-last p-0 h-75 edev">
            <Image src={Controllo} className="w-100 h-75 dimesiun" alt="..." priority />
          </div>
          <div className="col-12 col-md-12 col-lg-6 bg-light p-4 d-flex flex-column edev2">
            <h3 className="titolo mt-auto">Gestione Pneumatici</h3>
            <p className="paragrafo mb-auto">
              Siamo sempre pronti ad aiutarti qualunque siano le tue esigenze.
              Che tu abbia bisogno di nuovi pneumatici, di un equilibratura o di
              un allineamento, qui troverai l’assistenza di cui hai bisogno. La
              tua sicurezza e il comfort della tua guida, che iniziano dai tuoi
              pneumatici, sono la nostra massima priorità.
            </p>
          </div>
        </div>
        <div className="mb-5 row card-servizi">
          <div className="col-12 col-md-12 col-lg-6 p-0 h-75 edev">
            <Image src={Restauro} className="w-100 h-75 dimesiun" alt="..." priority />
          </div>
          <div className="col-12 col-md-12 col-lg-6 bg-light p-4 d-flex flex-column edev2">
            <h3 className="titolo mt-auto">Restauro di Moto d'Epoca</h3>
            <p className="paragrafo mb-auto">
              Se hai una moto d’epoca che ha bisogno di una rimessa in moto, sei
              nel posto giusto. Dal ripristino della vernice originale alla
              ricostruzione del motore, ogni aspetto del restauro viene gestito
              con cura e attenzione ai dettagli per riportare la tua moto al suo
              antico splendore.
            </p>
          </div>
        </div>
        <div className="mb-5 row card-servizi">
          <div className="col-12 col-md-12 col-lg-6 order-lg-last p-0 h-75 edev">
            <Image src={Mecanics} className="w-100 h-75 dimesiun" alt="..." priority />
          </div>
          <div className="col-12 col-md-12 col-lg-6 bg-light p-4 d-flex flex-column edev2">
            <h3 className="titolo mt-auto">Revisione</h3>
            <p className="paragrafo mb-auto">
              Se la tua moto necessita di un controllo completo per assicurare
              la sua conformità alle normative stradali, siamo qui per te. Dalla
              verifica dei freni alla misurazione delle emissioni, ogni
              dettaglio della tua moto viene esaminato per garantire la sua
              sicurezza e legalità.
            </p>
          </div>
        </div>
        <div className="mb-5 row card-servizi">
          <div className="col-12 col-md-12 col-lg-6 p-0 h-75 edev">
            <Image src={Controllo} className="w-100 h-75 dimesiun" alt="..." priority />
          </div>
          <div className="col-12 col-md-12 col-lg-6 bg-light p-4 d-flex flex-column edev2">
            <h3 className="titolo mt-auto">Elaborazioni e Tuning</h3>
            <p className="paragrafo mb-auto">
              Se vuoi tirare fuori il massimo dalla tua moto, siamo qui per te.
              Con un’attenta ottimizzazione, la tua moto può raggiungere
              prestazioni e efficienza del carburante superiori. Con noi, la tua
              moto può raggiungere nuovi livelli di eccellenza, offrendoti
              un’esperienza di guida senza precedenti.
            </p>
          </div>
        </div>
        <div className="mb-5 row card-servizi">
          <div className="col-12 col-md-12 col-lg-6 order-lg-last p-0 h-75 edev">
            <Image src={Restauro} className="w-100 h-75 dimesiun" alt="..." priority />
          </div>
          <div className="col-12 col-md-12 col-lg-6 bg-light p-4 d-flex flex-column edev2">
            <h3 className="titolo mt-auto">Diagnostica Elettronica</h3>
            <p className="paragrafo mb-auto">
              Utilizzando strumenti diagnostici all’avanguardia, come il sistema
              TEXA, siamo in grado di identificare e risolvere qualsiasi
              problema elettronico che potrebbe influire sul funzionamento della
              tua moto, garantendoti il corretto funzionamento delle componenti
              elettroniche, per una guida sicura e senza problemi.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-2 pt-5 mt-5 ilrosso">
        <p className="fs-3 ps-3 py-0 mt-2 bordazz">
          Hai altre domande?{" "}
          <Link href="/contatti" className="piss">
            Contattaci!
          </Link>
        </p>
      </div>
    </div>
  );
}
export default servizi;
