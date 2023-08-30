import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteName } from '../RouteName';
import { AboutPage, HomePage } from '../../pages';

export function PrivateRoute() {
  return (
    <Routes>
      <Route path={RouteName.ROUTE_HOME} element={<HomePage />} />
      <Route path={RouteName.ROUTE_ABOUT} element={<AboutPage />} />
      <Route path='*' element={<HomePage />} />
    </Routes>
  );
}
