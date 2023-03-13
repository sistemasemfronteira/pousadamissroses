import React, { useState, useEffect } from 'react';
// logo
import LogoWhite from '../assets/img/logo-white.svg';
import LogoDark from '../assets/img/logo-dark.svg';

const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
        {/* logo */}
        <a href='/'>
          {header ? (
            <h1 className='container mx-auto text-Black flex justify-between'>Pousada Miss Rose</h1>
          ) : (
            <h1 className='container mx-auto text-white flex justify-between'>Pousada Miss Rose</h1>
          )}
        </a>
        {/* nav */}
        <nav
          className={`${
            header ? 'text-primary' : 'text-white'
          } flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}
        >
          <a href='/' className='hover:text-accent transition'>
            Home
          </a>
          <a href='#qts' className='hover:text-accent transition'>
            Quartos
          </a>
          <a href='#' className='hover:text-accent transition'>
            Sobre nós
          </a>
          <a href='#' className='hover:text-accent transition'>
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
