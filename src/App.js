import React, { Component } from "react";
import Land from "./land.svg";
import logo from "./logo.png";
import ph from "./ph.png";
import vs from "./vs.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="welcome">
          <div className="header">
            <a href="/">
              <img className="logo" alt="logo" src={logo} />
            </a>
          </div>
          <p className="h1">I'm Kass.</p>
          <p className="text1">a web designer.</p>
          <img className="land" alt="land" src={Land} />
        </div>
        <div className="skills">
          <img className="me" alt="Kass" src={logo} />
          <p className="h2">Hi.</p>
          <p className="text2">
            I'm a web designer / developer based in Moscow, Russia. I have a
            passion for web design and love to create for web and mobile
            devices.
          </p>
          <p className="h1">What I can do.</p>
          <div className="row">
            <img src={ph} alt="photoshop" className="row-pic" />
            <div className="column">
              <p className="h2">Design what you want.</p>
              <p className="text2">
                I like to keep it simple. My goals are to focus on typography,
                content and conveying the message that you want to send.
              </p>
            </div>
          </div>
          <div className="row">
            <img src={vs} alt="vs code" className="row-pic" />
            <div className="column">
              <p className="h2">Develop what you need.</p>
              <p className="text2">
                I'm a developer, so I know how to create your website to run
                across devices using the latest technologies available.
              </p>
            </div>
          </div>
          <p className="h1">I can help.</p>
          <p className="h2">I’m currently available for freelance work.</p>
          <p className="text3">
            If you have a project that you want to get started, think you need
            my help with something or just fancy saying hey, then get in touch.
          </p>
          <a href="mailto:4r5t7jd@gmail.com" className="message-me">
            ✉ MESSAGE ME
          </a>
        </div>
        <div className='footer'>
        <div className='links'>
        <a href='https://t.me/Rrromann' className='link'>telegram: @Rrromann</a>
        <a href='mailto:4r5t7jd@gmail.com' className='link'>email: 4r5t7jd@gmail.com</a>
        </div>
        <p>© 2020 <a className='rights-link' href='/'>Kass</a>. All rights reserved.</p>
        </div>
        
        <div />
      </div>
    );
  }
}

export default App;
