import React from 'react';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';

function UserDashboard() {
  return (
    <PageDefault>
      <h1>Bem vindo</h1>
      <FormField
        type="text"
        value="Renan Oliveira"
        name="nome"
        onChange={undefined}
      />
      <FormField
        label="CPF"
        type="text"
        name="cpf"
        value="465987987-60"
      />

      <FormField
        label="Email"
        type="email"
        name="email"
        value="renan@gmail.com"
      />

      <FormField
        label="Senha"
        type="password"
        name="senha"
        value="123456"
      />
      <Link to="/update">
        <Button>
          Atualizar
        </Button>
      </Link>
    </PageDefault>
  );
}

export default UserDashboard;
