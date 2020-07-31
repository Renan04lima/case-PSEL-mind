import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

const Pagina404 = () => (<div>Página 404</div>)

export default function Routes() {
  return (
    <Router>
      <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/user" component={UserDashboard} />
      <Route path="/admin" component={AdminDashboard} />
      <Route component={Pagina404}/>
      </Switch>
    </Router>
  );
}
