import React from 'react';
import './Page2.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import logo from './Avidian.png';
import logo2 from './CallerReady.png';
import logo3 from './Woodruff.jpg';
import logo4 from './Everloved.png';

const Page2 = () => {
    return (
        <div className="page2">
            <div className="up">
                <div className="up1">
                    <h1><u style={{textDecorationColor: "rgba(247, 103, 7, 0.822)"}}>Industrie</u>s we've<br/>worked with</h1>
                </div>
                <div className="up2">
                    <div className="lb">
                        <Button className="B1" variant="contained" ><ArrowBackIosIcon />
                        </Button>
                    </div>
                    <div className="middle1">
                        <HomeIcon className="features-icon" style={{ fontSize: 50 }}/><p>Real Estate</p>                            
                    </div>
                    <div className="middle2">
                        <LocalMallIcon className="features-icon" style={{ fontSize: 50 }}/><p>Ecommerce</p>
                    </div>
                    <div className="middle3">
                        <HomeIcon className="features-icon" style={{ fontSize: 50 }}/><p>Cloud Computing</p>
                    </div>
                    <div className="middle4">
                        <HomeIcon className="features-icon" style={{ fontSize: 50 }}/><p>Analytics</p>
                    </div>
                    <div className="rb">
                        <Button className="B2" variant="contained"><ArrowForwardIosIcon />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="down">
                <div className="down1">
                    <h1><u style={{textDecorationColor: "rgba(247, 103, 7, 0.822)"}}>Our Cli</u>ents</h1>
                </div>
                <div className="down2">
                    <div className="dlb">
                        <Button className="dB1" variant="contained" ><ArrowBackIosIcon />
                        </Button>
                    </div>
                    <div className="dmiddle1">
                        <img src={logo} alt="Logo" style={{ width: "70%", height: "35%", align: "middle" }}/>                           
                    </div>
                    <div className="dmiddle2">
                        <img src={logo2} alt="Logo" style={{ width: "70%", height: "40%", align: "middle" }}/>
                    </div>
                    <div className="dmiddle3">
                        <img src={logo3} alt="Logo" style={{ width: "70%", height: "70%", align: "middle" }}/>
                    </div>
                    <div className="dmiddle4">
                        <img src={logo4} alt="Logo" style={{ width: "70%", height: "35%", align: "middle" }}/>
                    </div>
                    <div className="drb">
                        <Button className="dB2" variant="contained"><ArrowForwardIosIcon />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page2;
