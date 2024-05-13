import React from "react";
import Link from "next/link";
import "./Nav.css";

const Navbar = () => {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg test mobile">
        <div className="container d-flex justify-content-between py-3 imgpipo">
          <div className="imgpipo">
            <Link className="navbar-brand" href="/">
              <img
                src="/loghi/logo-colorato-contorno-lettere.png"
                alt="Logo"
                width={140}
              />
            </Link>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link
                  className="nav-link text-white fw-bold patata"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  className="nav-link text-white fw-bold patata"
                  href="/servizi"
                >
                  Servizi
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-white fw-bold patata" href="#">
                  Chi Siamo
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  className="nav-link text-white fw-bold patata"
                  href="/contatti"
                >
                  Contatti
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                  className="nav-link text-white fw-bold patata"
                  href="/FAQ"
                >
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold patata" href="#">
                  News
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar test desktop">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img src="/loghi/logo-colorato-contorno-lettere.png" alt="Logo" width={140} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end test"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white fs-2 fw-bold text-center mb-3" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fs-2 fw-bold text-center mb-3" href="/servizi">
                    SERVIZI
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fs-2 fw-bold text-center mb-3" href="/chisiamo">
                    CHI SIAMO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fs-2 fw-bold text-center mb-3" href="/news">
                    NEWS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fs-2 fw-bold text-center mb-3" href="/FAQ">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white fs-2 fw-bold text-center mb-3" href="/contatti">
                    CONTATTI
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
