import React, { Component } from "react";
import Land from "./land.svg";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className='welcome'>
        <div className="header">
          <a href="/">
            <img className="logo" alt="logo" src={logo} />
          </a>
        </div>
        <p className='h1'>I'm Kass.</p>
        <p className="text1">a web designer.</p>
        <img className="land" alt="land" src={Land} />
        </div>
        <div className='skills'>S
        <img className="me" alt="Kass" src={logo} />
        <p className='h2'>Hi.</p>
        <p className="text2">
          I'm a web designer / developer based in Moscow, Russia. I have a
          passion for web design and love to create for web and mobile devices.
        </p>
        <p className='h2'>What I can do.</p>
        </div>S
      </div>
    );
  }
}

export default App;
