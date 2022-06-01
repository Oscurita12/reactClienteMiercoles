import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {Clara} from './Clara.js'

import {Menu} from './Menu.js'

import {Slider} from './Slider.js'

const root = ReactDOM.createRoot(document.getElementById('root'));


//fila para pintar
root.render(
  <div>
    <Menu></Menu>
    <Clara></Clara>
    <Slider></Slider>
  </div>
)
