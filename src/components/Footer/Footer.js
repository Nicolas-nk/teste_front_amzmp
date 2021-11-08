import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Endereço</h2>
            <Link to='/'>Portugal - Almada Alameda Guerra Junqueiro, 26 2810-071 - Laranjeiro Almada</Link>
            <Link to='/'>Brasil - RJ Rua passei, 38 20021-290 Centro Rio de Janeiro</Link>
            <Link to='/'>Brasil - SP Alameda Grajaú, 129, 14° andar 06454-060 - Barueri - São Paulo</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre</h2>
            <Link to='/'>Clientes e Prtifólio</Link>
            <Link to='/'>Tecnologias</Link>
            <Link to='/'>Pesquisa de Satisfação</Link>
            <Link to='/'>MenuBoard Digital</Link>
            <Link to='/'>Soluções</Link>
            <Link to='/'>Tv corporativa</Link>
            <Link to='/'>Muppie digital</Link>
            <Link to='/'>IOT</Link>
            <Link to='/'>Contato</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
              <div className='footer-logo'>
                <img src='images/footerlogo.png' alt='We:Digitek' />
              </div>
              <div className='social-media-wrap'>
                <Link to='/'>
                  <img src='images/facebook-icon.png' alt='Facebook' />
                </Link>
                <Link to='/'>
                  <img src='images/instagram-icon.png' alt='Instagram' />
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;