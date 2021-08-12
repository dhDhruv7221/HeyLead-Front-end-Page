import React from 'react';
import './Navbar.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { RiHotspotFill } from "react-icons/ri";


const Navbar = () => {
    return (
	    <div className="nav">
            <div className="container">
            <div className="lefthead" >
                <h1>HeyLead<span className="left1"><RiHotspotFill /></span></h1> 
            </div>
            <div className="center">
                <a href='#Home'>Home</a>
                <a href='#Services'>Services</a>
                <a href='#About'>About</a>
                <a href='#Contact us'>Contact Us</a>
            </div>
            <span class="target"></span>
            <div className="right">
            <Button className="d" variant="contained" color="secondary"
            startIcon={<ExitToAppIcon />}>Log in
            </Button>
            </div>
            </div>
        </div>
    );
}

export default Navbar;
