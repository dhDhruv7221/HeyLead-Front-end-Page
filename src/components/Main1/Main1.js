import React from 'react';
import './Main1.css';
import { SiBing,SiGoogleads } from "react-icons/si";
import { DiYahoo } from "react-icons/di";
import FacebookIcon from '@material-ui/icons/Facebook';

const Main1 = () => {
    return(
        <div className="main1">
            <div className="left12">
                <a href='#Marketing-Partners'><span className="w"><FacebookIcon style={{ fontSize: 50 }}/></span><p>Marketing<br/> Partners</p></a>
            </div>
            <div className="left2">
                <a href='#Bing ads'><span className="x"><SiBing /></span><p>Bing ads</p></a>
            </div>
            <div className="right1">
                <a href='#Google Ads'><span className="y"><SiGoogleads /></span><p>Google Ads</p></a>
            </div>
            <div className="right2">
                <a href='#SEARCHMARKETING'><span className="z"><DiYahoo style={{ fontSize: 70 }} /></span><p>SEARCH<br/> MARKETING</p></a>
            </div>
        </div>
    )
}
export default Main1;