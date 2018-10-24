import React from "react";
import { Link } from "react-router-dom";

import AuthUserContext from '../../session/AuthUserContext';
import * as routes from "../../constants/routes";
import SignOutButton from '../SignOut/SignOut';
import './Navigation.css';

const Navigation = () =>
  <AuthUserContext.Consumer>
    { authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () => (
<nav className="navbar navbar-expand-lg navbar-dark bg-red">
  <a className="navbar-brand" href={routes.SIGN_IN}>Burger Queen</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to={routes.HOME} className="nav-link">Ingresar pedido</Link>
      </li>
      <li className="nav-item">
        <Link to={routes.ACCOUNT} className="nav-link">Perfil</Link>
      </li>
      <li className="nav-item">
        <SignOutButton />
      </li>
    </ul>
  </div>
</nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-red">
    <a className="navbar-brand" href={routes.SIGN_IN}>Burger Queen</a>
  </nav>
  );

export default Navigation;
