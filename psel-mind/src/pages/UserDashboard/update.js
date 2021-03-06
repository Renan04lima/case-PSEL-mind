import React, { useState } from 'react';
import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

function UpdateUser() {
  const valoresIniciais = {
    nome: '',
    cpf: '',
    email: '',
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
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  return (
    <PageDefault>
      <h1>
        Atualizar
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        setValues(valoresIniciais);
        console.log(valoresIniciais)
      }}
      >

        <FormField
          label="Nome completo"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="CPF"
          type="text"
          name="cpf"
          value={cpfMask(values.cpf)}
          onChange={handleChange}
        />

        <FormField
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />

        <FormField
          label="Senha"
          type="password"
          name="senha"
          value={values.senha}
          onChange={handleChange}
        />
        <Link to="/user">
          <Button>
            Atualizar
          </Button>
        </Link>
      </form>
    </PageDefault>
  );
}

export default UpdateUser;
