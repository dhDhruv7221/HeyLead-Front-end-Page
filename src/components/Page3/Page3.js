import React from 'react';
import './Page3.css';
import logo from './Robert.jpeg';

const Page3 = () => {
    return (
        <div className="Page3">
            <div className="p1">
                <h1><u style={{textDecorationColor: "rgba(247, 103, 7, 0.822)"}}>Our Tea</u>m</h1>
            </div>
            <div className="p2">
                {/* Left Section */}
                <div className="left1">
                    <div className="lefttop">
                        <div classname="lefttop1" style={{height:"9em"}}>
                            <img style={{ borderRadius:"100px",height:"10em"}} src={logo} alt="Logo" />
                        </div>
                        <div className="lefttop2">
                            <h5 style={{height:"2px", textAlign:"center", fontSize: "17px"}}>Martin</h5>
                            <p style={{textAlign:"center", color:"rgb(116, 115, 115)"}} >Co-Founder and Partner</p>
                        </div>
                    </div>
                    <div className="leftdown">
                        <div className="leftdown1" style={{height:"9em"}}>
                            <img style={{borderRadius:"30em",height:"10em"}} src={logo} alt="Logo" />
                        </div>
                        <div className="leftdown2">
                            <h5 style={{height:"2px", textAlign:"center", fontSize: "17px"}}>Sean</h5>
                            <p style={{textAlign:"center", color:"rgb(116, 115, 115)"}} >Senior Developer</p>
                        </div>
                    </div>
                </div>
                {/* Center Section */}
                <div className="center1">
                    <div className="centertop">
                        <div className="centertop1" style={{height:"10em"}}>
                            <img style={{borderRadius:"30em",height:"10em"}} src={logo} alt="Logo" />
                        </div>
                        <div className="centertop2">
                            <h5 style={{height:"2px", textAlign:"center", fontSize: "17px"}}>Milena</h5>
                            <p style={{textAlign:"center", color:"rgb(116, 115, 115)"}} >Co-Founder and Partner</p>
                        </div>
                    </div>
                    <div className="centerdown">
                        <div className="centerdown1" style={{height:"9em"}}>
                            <img style={{borderRadius:"30em",height:"10em"}} src={logo} alt="Logo" />
                        </div>
                        <div className="centerdown2">
                            <h5 style={{height:"2px", textAlign:"center", fontSize: "17px"}}>Azeem</h5>
                            <p style={{textAlign:"center", color:"rgb(116, 115, 115)"}} >Web Developer / Web<br/>Front End Developer</p>
                        </div>
                    </div>
                </div>
                {/* Right Section */}
                <div className="right">
                    <div className="righttop">
                        <div className="righttop1" style={{height:"10em"}}>
                            <img style={{borderRadius:"30em",height:"10em"}} src={logo} alt="Logo" />
                        </div>
                        <div className="righttop2">
                            <h5 style={{height:"2px", textAlign:"center", fontSize: "17px"}}>Ryan</h5>
                            <p style={{textAlign:"center", color:"rgb(116, 115, 115)"}} >Business Development</p>
                        </div>
                    </div>
                    <div className="rightdown">
                        <div  className="rightdown1" style={{height:"9em"}}>
                            <img style={{borderRadius:"30em",height:"10em"}} src={logo} alt="Logo" />
                        </div>
                        <div className="rightdown2">
                            <h5 style={{height:"2px", textAlign:"center", fontSize: "17px"}}>Kathryn</h5>
                            <p style={{textAlign:"center", color:"rgb(116, 115, 115)"}} >Copywriter</p>
                        </div>
                    </div>
                </div>
                {/* Special Section */}
                <div className="special">
                    <div className="specialtop">
                        <div className="specialtop1" style={{height:"10em"}}>
                            <img style={{borderRadius:"30em",height:"10em"}} src={logo} alt="Logo" />
                        </div>
                        <div className="specialtop2">
                            <h5 style={{height:"2px", textAlign:"center", fontSize: "17px"}}>Vasili Savitski</h5>
                            <p style={{textAlign:"center", color:"rgb(116, 115, 115)"}} >Product Designer</p>
                        </div>
                    </div>
                    <div className="specialmiddle">
                        <div className="specialmiddle1" style={{height:"9em"}}>
                            <img style={{borderRadius:"30em",height:"10em"}} src={logo} alt="Logo" />
                        </div>
                        <div className="specialmiddle2">
                            <h5 style={{height:"2px", textAlign:"center", fontSize: "17px"}}>Julia</h5>
                            <p style={{textAlign:"center", color:"rgb(116, 115, 115)"}} >Senior Designer</p>
                        </div>
                    </div>
                    <div className="specialdown">
                        <div className="specialdown1" style={{height:"9em"}}>
                            <img style={{borderRadius:"30em",height:"10em"}} src={logo} alt="Logo" />
                        </div>
                        <div className="specialdown2">
                            <h5 style={{height:"2px", textAlign:"center", fontSize: "17px"}}>Nani</h5>
                            <p style={{textAlign:"center", color:"rgb(116, 115, 115)"}} >Front End Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page3;