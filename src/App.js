import React from 'react'

import {Footer, Blog, possibility, Feature, whatGPT3, header} from "./containers";
import {CTA, Brand, Navbar} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <navbar />
          <header />
        </div>
        <brand />
        <whatGPT3 />
        <features />
        <possibility />
        <cta />
        <blog />
        <footer />
    </div>

  )
}

export default App