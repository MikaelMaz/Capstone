import React from "react";
import "./testimonial.css";
import Link from "next/link";

const Testimonial = () => {
  return (
    <>
      <div className="container p-0">
        <p className="h1 ps-3 bordazz my-5 fw-light">Chi ci ha già scelto</p>
      </div>
      <div className="bg-light container py-5 ombra px-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="mirco ombra-testimonial"></div>
            <div className="text-center">
              <p className="testimonial-titolo">Mirco Bettini</p>
              <p className=" testimonial-paragrafo">
                Con una lunga carriera nell’enduro, nel motorally e nel Raid TT
                a partire dal 1988, con numerose vittorie e piazzamenti in vari
                campionati e gare, tra cui la Transitalia Marathon e la
                Gibraltar Race. Nel 2023 ha vinto la categoria Big Bike al
                Tuareg Rallye.
              </p>
              <div className="testimonial-relativo">
              <Link href="https://www.azzurrorosa.com/" target="_blank" className="text-decoration-none">
                <p className="m-0 testimonial-link">
                  Per saperne di più <i className="bi bi-arrow-right"></i>
                </p>
              </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="giovi ombra-testimonial"></div>
            <div className="text-center">
              <p className="testimonial-titolo">Giovanni Lippolis</p>
              <p className="testimonial-paragrafo">
                Giovane pilota che ha iniziato la sua carriera nel motocross,
                passando poi all’enduro. Ha dimostrato il suo talento
                partecipando a competizioni di livello nazionale e europeo,
                distinguendosi per le sue prestazioni.
              </p>
              <div className="testimonial-relativo">
              <Link href="https://www.facebook.com/giovanni.a.lippolis/" target="_blank" className="text-decoration-none">
                <p className="m-0 testimonial-link">
                  Per saperne di più <i className="bi bi-arrow-right"></i>
                </p>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
