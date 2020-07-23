import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const AuthRoutes = () => (
  <BrowserRouter>
    <Route path="/" exact component={SignIn} />
  </BrowserRouter>
);

export default AuthRoutes;
