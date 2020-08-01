import React, { useState } from 'react';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import styled, { css } from 'styled-components';
import Button from '../../components/Button';

const LoginField = styled.form`
     display: block;
     margin-right:auto;
     margin-left:auto;
     max-width: 500px;
     background-color: var(--azul);
     padding: 20px;
`;

function Login() {
  const valoresIniciais = {
    username: '',
    senha: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const cpfMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  function setValue(chave, valor) {
    // chave: nome, cpf, ...
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
    console.log(cpfMask(valor))
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('username'),
      infosDoEvento.target.value,
    );
  }
  return (
    <PageDefault>

      <LoginField onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
        console.log(valoresIniciais)
      }}
      >
        <h1>
          Login
        </h1>
        <br />

        <FormField
          label="E-mail ou CPF"
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />

        <FormField
          label="Senha"
          type="password"
          name="senha"
          value={values.senha}
          onChange={handleChange}
        />

        <Button>
          Login
        </Button>
      </LoginField>
    </PageDefault>
  );
}

export default Login;
