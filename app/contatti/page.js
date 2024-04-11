import React from "react";
import Form from "@/components/Form";
import "./contatti.css"

const Contatti = () => {
  return (
    <div className="container pt-5 caca">
      <div className="row mt-3">
        <Form/>
        <div className="col-1"></div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div>
            <div>
              <p className="fs-3 pt-3 ilrosso">Orari di Apertura</p>
              <div className="row gap-2">
                <div className="col-1 iconz">
                  <i className="bi bi-clock me-2 fs-5"></i>
                </div>
                <div className="col-10 paddino">
                  <div className="row">
                    <div className="col-6 text-start p-0">
                      <p>Da Martedì a Sabato:</p>
                    </div>
                    <div className="col-6 p-0 spatio">
                      <span>9:00 - 12:30</span>
                      <p>15:00 - 19:00</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 text-start p-0">
                      <p>Lunedì e Domenica:</p>
                    </div>
                    <div className="col-6 p-0 spatio">
                      <p>Chiuso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-2 margino ilrosso">
              <p
                className="fs-3"
              >
                Contatti
              </p>
              <div className="row gap-2">
                <div className="col-1 iconz">
                  <i className="bi bi-telephone me-2 fs-5"></i>
                </div>
                <div
                  className="col-10 text-start ps-0 paddino"
                >
                  <p>0541-920605</p>
                </div>
              </div>
              <div className="row gap-2">
                <div className="col-1 iconz">
                  <i className="bi bi-phone me-2 fs-5"></i>
                </div>
                <div
                  className="col-10 text-start ps-0 paddino"
                >
                  <p>338-7355090</p>
                </div>
              </div>
              <div className="row gap-2">
                <div className="col-1 iconz">
                  <i className="bi bi-envelope me-2 fs-5"></i>
                </div>
                <div
                  className="col-10 text-start ps-0 paddino"
                >
                  <p>mazzinimoto@hotmail.it</p>
                </div>
              </div>
            </div>
            <div className="text-end pe-3">
            <a href="https://www.instagram.com/mazzinimoto/" target="_blank" rel="noopener noreferrer" className='text-secondary fs-2 pe-3 ani1 dimenso'><i className="bi bi-instagram"></i></a>
            <a href="https://www.facebook.com/mazzinimoto/" target="_blank" rel="noopener noreferrer" className='text-secondary fs-2 ani2 dimenso'><i className="bi bi-facebook"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.8767108880875!2d12.287719976640012!3d43.899820136444696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132c9030b79b8487%3A0x27c1f1069ab6dd98!2sMazzini%20Moto!5e0!3m2!1sit!2sit!4v1712653744783!5m2!1sit!2sit"
            className="w-100"
            height="600"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
