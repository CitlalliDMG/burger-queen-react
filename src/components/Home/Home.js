import React from 'react';

import withAuthorization from '../../session/withAuthorization';

const HomePage = () =>
  <div>
    <h1>Home Page</h1>
    <p>hola</p>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
