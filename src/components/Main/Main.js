import React from 'react';
import './Main.css';
import Button from '@material-ui/core/Button';
import logo from './Man.jpeg';

const Main = () => {
  return (
    <div className="main">
      <div className="leftsub">
        <h1>Smart Ideas<br/> For Your Brand<br/> Are Here.</h1>
        <p>HeyLead is all about lead generation and helping small<br/> businessess grow 
          through digital marketing services and<br/> technologies</p>
        <div className="G">
          <Button className="g" variant="contained" color="secondary">
            Get Started
          </Button>
        </div>
      </div>
      <div className="right">
        <img src={logo} alt="Logo" />
      </div>
    </div>
    
  );
}

export default Main;