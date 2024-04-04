import React from 'react';
import './Foot.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <img src="/loghi/logo-colorato-no-contorno.png" alt="Logo" className="footer-logo"/>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <p className='text-start'><i className="bi bi-geo-alt-fill"></i> Strada Provinciale Marecchia, 71, Novafeltria RN</p>
            <p className='text-start'><i className="bi bi-telephone-fill"></i> 0541-920605</p>
            <p className='text-start'><i className="bi bi-phone-fill"></i> 338-7355090 </p>
            <p className='text-start'><i className="bi bi-envelope-fill"></i> mazzini-moto@hotmail.com</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0 social">
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
