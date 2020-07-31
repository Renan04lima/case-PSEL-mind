import React from 'react';
import { FooterBase } from './styles';
import LogoFooter from '../../assets/img/footer.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={LogoFooter} alt="Logo home4u" />
      </a>
      <p>
        Empresa fictícia criada durante o PSEL da mind
      </p>
    </FooterBase>
  );
}

export default Footer;
