import React from 'react';
import { PrivateRoute } from './PrivateRoutes/PrivateRoutes';
import { PublicRoute } from './PublicRoutes/PublicRoutes';

export function RouteManager() {
  const token = true;
  if (token) {
    return <PrivateRoute />;
  }
  return <PublicRoute />;
}