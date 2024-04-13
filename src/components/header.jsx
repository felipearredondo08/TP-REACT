import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../assets/pildora.png';

const Header = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = logo;

    img.onload = () => {
      setLogoLoaded(true);
    };
  }, [logo]);

  return (

    <>
    <div className='cabezera'>
    <div className={`header ${logoLoaded ? 'logo-loaded' : ''}`}>
      <img src={logo} alt="Logo de la marca" className="logo" id="logo" />
      <h1>mNEMO</h1>
    </div>
    </div>
    </>
  );
};

export default Header;