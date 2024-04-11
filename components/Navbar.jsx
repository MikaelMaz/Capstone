import React from 'react';
import Link from 'next/link';
import './Nav.css';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg test mobile">
      <div className="container d-flex justify-content-between py-3 imgpipo">
        <div className='imgpipo'>
          <Link className="navbar-brand" href="/">
            <img src="/loghi/logo-colorato-contorno-lettere.png" alt="Logo" width={140} />
          </Link>
        </div>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link className="nav-link text-white fw-bold patata" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link text-white fw-bold patata" href="/servizi">Servizi</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link text-white fw-bold patata" href="#">Chi Siamo</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link text-white fw-bold patata" href="/contatti">Contatti</Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link text-white fw-bold patata" href="/FAQ">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold patata" href="#">News</Link>
            </li>
          </ul>
          </div>
        </div>
      </nav>

      <nav className="test desktop">
      <div className="container d-flex justify-content-between py-4 imgpipo">
        <div className='imgpipo'>
          <Link className="navbar-brand" href="/">
            <img src="/loghi/logo-colorato-contorno-lettere.png" alt="Logo" width={140} />
          </Link>
        </div>
      </div>
      <div className='container-fluid ps-4 row'>
              <Link className="nav-link text-white fs-5 fw-bold col-4 text-center pb-3" aria-current="page" href="/">HOME</Link>
            
              <Link className="nav-link text-white fs-5 fw-bold col-4 text-center pb-3" href="/servizi">SERVIZI</Link>
            
              <Link className="nav-link text-white fs-5 fw-bold col-4 text-center pb-3" href="#">CHI SIAMO</Link>
          
              <Link className="nav-link text-white fs-5 fw-bold col-4 text-center pb-3" href="#">NEWS</Link>
         
              <Link className="nav-link text-white fs-5 fw-bold col-4 text-center pb-3" href="/FAQ">FAQ</Link>
 
              <Link className="nav-link text-white fs-5 fw-bold col-4 text-center pb-3" href="/contatti">CONTATTI</Link>
  
        </div>
      </nav>
  </div>
  );
};

export default Navbar;