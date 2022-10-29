import React from 'react';

import { Footer, Blog, Possibility, Features, Prices, WhatGPT3, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <Blog />
    <Prices />
    <Features />
    <Possibility />
    <CTA />
 
    <Footer />
  </div>
);

export default App;
