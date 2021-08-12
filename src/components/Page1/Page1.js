import React from 'react';
import './Page1.css';
import logo from './Logo1.jpeg';

const Page1 = () => {
    return(
        <div className="P2">
            {/* Left */}
            <div className="leftsubhead">
                <h1 className="l1"><u style={{textDecorationColor: "rgba(247, 103, 7, 0.822)"}}>What We</u> Do</h1>
                <div className="card1">
                    <img src={logo} alt="Logo" style={{ width: "40%", height: "30%", marginLeft: "1.5em" }}/>
                    <div class="l2">
                        <h4>Search Engine Optimization<br/>(SEO)</h4>
                        <p>HeyLead is a team of dedicated<br/>and proactive SEO experts that<br/>can increase your search engine</p>
                        <a href="#arrow" className="arrow">&#8594;</a>
                    </div>
                </div>
            </div>
            {/* center */}
            <div className="center">
                <div className="card2">
                    <img src={logo} alt="Logo" style={{ width: "40%", height: "30%", marginLeft: "1.5em" }}/>
                    <div class="c1">
                        <h4>Search Engine Marketing<br/>(SEM)</h4>
                        <p>There were 3.5 billion searches on<br/>google today.Did your<br/>advertisements reaches the right.</p>
                        <a href="#arrow" className="arrow">&#8594;</a>
                    </div>
                </div>
                <div className="card3">
                    <img src={logo} alt="Logo" style={{ width: "40%", height: "30%", marginLeft: "1.5em" }}/>
                    <div class="c2">
                        <h4>Remarketing</h4>
                        <p>There were 3.5 billion searches on<br/>google today.Did your<br/>advertisements reaches the right.</p>
                        <a href="#arrow" className="arrow">&#8594;</a>
                    </div>
                </div>
            </div>
            {/* Right */}
            <div className="right">
                <div className="card4">
                    <img src={logo} alt="Logo" style={{ width: "40%", height: "30%", marginLeft: "1.5em" }}/>
                    <div class="r1">
                        <h4>Search Engine Optimization<br/>(SEO)</h4>
                        <p>HeyLead is a team of dedicated<br/>and proactive SEO experts that<br/>can increase your search engine</p>
                        <a href="#arrow" className="arrow">&#8594;</a>
                    </div>
                </div>
                <div className="card5">
                    <img src={logo} alt="Logo" style={{ width: "40%", height: "30%", marginLeft: "1.5em" }}/>
                    <div class="r2">
                        <h4>Search Engine Optimization<br/>(SEO)</h4>
                        <p>HeyLead is a team of dedicated<br/>and proactive SEO experts that<br/>can increase your search engine</p>
                        <a href="#arrow" className="arrow">&#8594;</a>
                    </div>
                </div>
                <div className="card6">
                    <img src={logo} alt="Logo" style={{ width: "40%", height: "30%", marginLeft: "1.5em" }}/>
                    <div class="r3">
                        <h4>Search Engine Optimization<br/>(SEO)</h4>
                        <p>HeyLead is a team of dedicated<br/>and proactive SEO experts that<br/>can increase your search engine</p>
                        <a href="#arrow" className="arrow">&#8594;</a>
                    </div>
                </div>
            </div>              
        </div>
    );
}

export default Page1;