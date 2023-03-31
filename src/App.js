import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import LatestFirmware from './components/Firmware/latest';
import VersionFirmware from './components/Firmware/version';
import redtouchFirmware from './components/Home/redtouch';
import ActionOS from './components/Home/actionOs'
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/firmware/smallhdos/latest' component={LatestFirmware} />
          <Route path='/firmware/smallhdos/:version' component={VersionFirmware} />
          <Route path='/firmware/red-touch' component={redtouchFirmware} />
          <Route path='/firmware/action-os' component={ActionOS} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
