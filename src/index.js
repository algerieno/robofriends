import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './card'
import Tachyons from 'tachyons'
import * as serviceWorker from './serviceWorker';
import {robots} from './bank'

ReactDOM.render(
  <React.StrictMode>
    <Card name = {robots[0].first_name} slogan = {robots[0].slogan} id = {robots[0].id}/>
    <Card name = {robots[1].first_name} slogan = {robots[1].slogan} id = {robots[1].id}/>
    <Card name = {robots[2].first_name} slogan = {robots[2].slogan} id = {robots[2].id}/>
    <Card name = {robots[4].first_name} slogan = {robots[4].slogan} id = {robots[4].id}/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
