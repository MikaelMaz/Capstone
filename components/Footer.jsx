import React from 'react';
import './Foot.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3 mb-md-0">
            <img src="/loghi/logo-colorato-no-contorno.png" alt="Logo" className="footer-logo"/>
          </div>
          <div className="col-lg-3 col-md-4 mb-3 mb-md-0">
            <p className='text-start'><i className="bi bi-geo-alt-fill"></i> SP Marecchia, 71, Novafeltria RN</p>
            <p className='text-start'><i className="bi bi-telephone-fill"></i> 0541-920605</p>
            <p className='text-start'><i className="bi bi-phone-fill"></i> 338-7355090 </p>
            <p className='text-start'><i className="bi bi-envelope-fill"></i> mazzinimoto@hotmail.it</p>
          </div>
          <div className="col-lg-3 col-md-4 mb-3 mb-md-0">
          <Link className="d-block text-white fs-6 navi" href="/">HOME</Link>
          <Link className="d-block text-white fs-6 navi" href="/servizi">SERVIZI</Link>
          <Link className="d-block text-white fs-6 navi" href="#">CHI SIAMO</Link>
          <Link className="d-block text-white fs-6 navi" href="#">NEWS</Link>
          <Link className="d-block text-white fs-6 navi" href="/FAQ">FAQ</Link>
          <Link className="d-block text-white fs-6 navi" href="/contatti">CONTATTI</Link>
          </div>
          <div className="col-md-3 mb-3 mb-md-0 social">
            <a href="https://www.facebook.com/mazzinimoto/" target="_blank" rel="noopener noreferrer" className='text-white fs-3 pe-4'><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/mazzinimoto/" target="_blank" rel="noopener noreferrer" className='text-white fs-3'><i className="bi bi-instagram"></i></a>
            <p className="footer-copy">© {new Date().getFullYear()} Mazzini Moto</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
