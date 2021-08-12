import { Button } from '@material-ui/core';
import React from 'react';
import './Searchbar.css';

const Searchbar = () => {
    return(
        <div className="searchbar">
            <div className="heading">
                <h1><u>Subscribe To</u> Get The Latest<br/>News About Us</h1>
                <p>We recommend you to subscribe to our newspaper,drop your email below<br/>to get daily updates about us</p>
            </div>
            <div className="bar">
                <input className="barInput" placeholder="Enter Your Email Address"></input>
                <Button className="barButton" variant="contained" color="secondary">
            Subscribe
          </Button>
            </div>

        </div>
    );
}

export default Searchbar;