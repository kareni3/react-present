import '../css/app.css'

import React from 'react'
import { render } from 'react-dom'
import App from './App'
import EventEmitter from './lib/EventEmitter'

window.ee = new EventEmitter();

render(
  <App />,
  document.getElementById('root')
);
