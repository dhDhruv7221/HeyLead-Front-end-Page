import React from "react";
import './Footer.css';
import { RiHotspotFill } from "react-icons/ri";
import { FaFacebookF } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footertop">
                <h1>HeyLead<span className="f1"><RiHotspotFill /></span></h1>
            </div>
            <div className="footerdown">
                <div className="f2">
                    <p>Heylead is all about lead generation and<br/> helping small businesses grow through<br/> digital marketing services and<br/> technologies.</p>
                    <div className="bf">
                        <Button className="bf2" variant="contained"><FaFacebookF  style={{fontSize:"20px"}}/>
                        </Button>
                        <Button className="bf3" variant="contained" ><TwitterIcon />
                        </Button>
                    </div>
                </div>
                <div className="f3">
                    <h4 style={{fontSize:"20px"}}>About</h4>
                    <div className="about">
                    <a href="#Who we Are?">Who we Are?</a>
                    <a href="#Terms and Conditions">Terms and Conditions</a>
                    <a href="#Privacy Policy">Privacy Policy</a>
                    <a href="#Sitemap">Sitemap</a>
                    </div>
                </div>
                <div className="f4">
                    <h4 style={{fontSize:"20px"}}>Contact Us</h4>
                    <div className="contact">
                    <div className="location">
                        <span><AddLocationIcon style={{color: "black", fontSize:"30px"}} /></span>3729 Southern Avenue<br/>Des Moines, IA 50309
                    </div>
                    <div className="email">
                        <span><EmailIcon style={{color: "black", fontSize:"30px"}}/></span>info@heylead.com
                    </div> 
                    <div className="mobile">
                        <span><AddIcCallIcon style={{color: "black", fontSize:"30px"}}/></span>(415) 857-5323
                    </div>
                    </div>
                </div>                
            </div>
        </div>
    );
}

export default Footer;