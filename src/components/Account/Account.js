import React from 'react';

import AuthUserContext from '../../session/AuthUserContext';
import PasswordChangeForm from '../PasswordChange/PasswordChange';
import withAuthorization from '../../session/withAuthorization';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div className="center container col-8">
        <h1>Información de perfil</h1>
        <p>¿Quieres cambiar tu contraseña?</p>
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
