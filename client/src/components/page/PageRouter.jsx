import React from 'react';
import {Route} from 'react-router-dom';
import routes from './Routes';

const router = () => (
  <div className="router-div">
      {routes.map(route => (
          <Route
            key={`route-${route.name}`}
            path={route.path}
            exact={route.exact}
            component={route.component}
            render={route.render}
          />
      ))}
  </div>
);
export default router;