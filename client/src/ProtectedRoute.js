import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const { user, component } = props;
  const Component = component;
  return (

    user.isAuthenticated ? <Route path={user.path} component={Component} />
      : <Redirect to="/" />
  );
};

export default connect(state => state, {})(ProtectedRoute);
