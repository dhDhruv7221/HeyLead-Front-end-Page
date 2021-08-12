import React from 'react';
import './Blog.css';
import logo1 from './blog1.jpg';
import logo2 from './blog2.jpg';
import logo3 from './blog3.jpg';

const Blog = () => {
    return(
        <div className="blog">
            <div className="head">
                <h1><u style={{textDecorationColor: "rgba(247, 103, 7, 0.822)"}}>Latest B</u>logs</h1>
            </div>
            <div className="head2">
                <div className="Card1">
                    <img src={logo1} alt="Logo" style={{ borderRadius:"10px", width: "70%", height: "30%" }}/>
                    <div class="blog1">
                        <h4>The 4 Main Components<br/>Of A Sales Funnel</h4>
                        <p>HeyLead is a team of dedicated<br/>and proactive SEO experts that<br/>can increase your search engine</p>
                        <span className="Arrow">&#8594;</span>
                    </div>
                </div>
                <div className="Card2">
                <img src={logo2} alt="Logo" style={{borderRadius:"10px", width: "70%", height: "30%" }}/>
                    <div class="blog2">
                        <h4>Facebook's News Feed<br/>Changes | How Will it Affect<br/>Marketers?</h4>
                        <p>With a post that caused social<br/>media marketers a sit up and pay<br/>attention, Facebook CEO, Mark<br/>Zukerberg, recently announced</p>
                        <a href="#Arrow" className="Arrow">&#8594;</a>
                    </div>
                </div>
                <div className="Card3">
                <img src={logo3} alt="Logo" style={{borderRadius:"10px", width: "70%", height: "30%" }}/>
                    <div class="blog3">
                        <h4>A Day At The Google Zoo |<br/>The Google Algorithm Animals</h4>
                        <p>well, there may not actually be a<br/>Google zoo (yet!), but there is a<br/>coterie of animals that feature<br/>Google..</p>
                        <span className="Arrow">&#8594;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;