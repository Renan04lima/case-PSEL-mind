import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
/* import UpdateAdmin from './pages/AdminDashboard/update';
import UpdateUser from './pages/UserDashboard/update'; */

const Pagina404 = () => (<div>Página 404</div>)

export default function Routes() {
  return (
    <Router>
      <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/user" component={UserDashboard} />
      {/* <Route path="/user/update" component={UpdateUser} /> */}
      <Route path="/admin" component={AdminDashboard} />
      {/* <Route path="/admin/update" component={UpdateAdmin} /> */}
      <Route component={Pagina404}/>
      </Switch>
    </Router>
  );
}
