import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css'

import AppComponents from './App'

it('renders without crashing', () => {

  const divLoadBar = document.createElement('div');
  const divApp = document.createElement('div');
  ReactDOM.render(
    <AppComponents.LoadBar />,
    divLoadBar
  )

  ReactDOM.render(
    <AppComponents.App />,
    divApp
  )
});
