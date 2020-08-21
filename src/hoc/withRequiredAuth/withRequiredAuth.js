import React, { Component, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function (ComposedComponent) {
  return (props) => {
    const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

    if (!isAuthenticated) return <Redirect to='/login' />;

    return <ComposedComponent {...props} />
  };
}