import React from 'react';
// logo
import LogoWhite from '../assets/img/logo-white.svg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between'>
        {/* logo */}
        <a href='/'>
          <h1>Pousada Miss Rose</h1>
        </a>
        Copyright &copy; 2023. Todos os direitos reservados. Sistema Sem Fronteira.
      </div>
    </footer>
  );
};

export default Footer;
