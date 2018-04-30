import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import authService from '../../services/authService';

const PrivateRoute = ({component: ComponentToRender, ...rest}) => (
  <Route 
    {...rest}
    render={(props => (
      authService.isAuthenticated()
        ? <ComponentToRender {...props} />
        : <Redirect to={
            {
              pathname: "/login",
              state: { target: props.location }
            }
        } /> 
    ))}
  />
);

export default PrivateRoute;