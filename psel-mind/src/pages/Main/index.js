import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const ButtonMain = styled.a`
  background: #3D94F6;
   background-image: -webkit-linear-gradient(top, #3D94F6, #1E62D0);
   background-image: -moz-linear-gradient(top, #3D94F6, #1E62D0);
   background-image: -ms-linear-gradient(top, #3D94F6, #1E62D0);
   background-image: -o-linear-gradient(top, #3D94F6, #1E62D0);
   background-image: linear-gradient(to bottom, #3D94F6, #1E62D0);
   -webkit-border-radius: 20px;
   -moz-border-radius: 20px;
   border-radius: 20px;
   max-height: 50px;
   line-height: 50px;
   color: #FFFFFF;
   max-width: 500px;
   font-size: 49px;
   font-weight: 400;
   padding: 40px;
   box-shadow: 1px 1px 20px 0px #000000;
   -webkit-box-shadow: 1px 1px 20px 0px #000000;
   -moz-box-shadow: 1px 1px 20px 0px #000000;
   text-shadow: 1px 1px 20px #000000;
   border: solid #337FED 1px;
   text-decoration: none;
   cursor: pointer;
   text-align: center;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const CaixaMain = styled.div`
display: block;
     margin-right:auto;
     margin-left:auto;
     max-width: 500px;
     padding: 20px;
`;
function Main() {
  return (
    <PageDefault>
      <CaixaMain>

        <Link to="/cadastro">
          <ButtonMain>
            Cadastrar
          </ButtonMain>
        </Link>
        <br/>
        <Link to="/login">
          <ButtonMain>
            Login
          </ButtonMain>
        </Link>
      </CaixaMain>
    </PageDefault>
  );
}

export default Main;
