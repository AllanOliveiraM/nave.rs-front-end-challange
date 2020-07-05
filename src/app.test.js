// Not working with 'react-image-appear' feature! If you do try this, toggle the
// comments in App.jsx in header section  'Image Loader Option'

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
