import React from 'react';
import './styles/pageimages.css';
import './styles/portfolio.css';

import ToDo from '../images/todoSS.png';
import Profile from '../images/profileSS.png';
import NewProject from '../images/NewProject.png'

const Portfolio = () => {
    return (
        <div className='Portfolio'>
            <div className='Portfolio-items'>
                <img src={Profile} className='portfolio' alt="sccreen shot of my self intrduction"/>
                <div className='Portfolio-details'>
                    <h2>1. 自己紹介</h2>
                    <p>使用言語: React, JavaScript, css</p>
                    <p>
                        Github Link: <a href="https://github.com/Sierra4y/myself" target="_blank" rel="noopener noreferrer">
                        https://github.com/Sierra4y/myself
                        </a>
                    </p>
                </div>
            </div>
            <div className='Portfolio-items'>
                <img src={ToDo} className='portfolio' alt="sccreen shot of ToDo list"/>
                <div className='Portfolio-details'>    
                    <h2>2. ToDo List</h2>
                    <p>使用言語: Go, React, JavaScript, css</p>
                    <p>
                        Github Link: <a href="https://github.com/Sierra4y/practice_todo" target="_blank" rel="noopener noreferrer">
                        https://github.com/Sierra4y/practice_todo
                        </a>
                    </p>
                </div>
            </div>
            <div className='Portfolio-items'>
                <img src={NewProject} className='portfolio' alt="coming soon ..."/>
                <div className='Portfolio-details'>
                    <h2>3. 製作中</h2>
                    <p>使用言語: Node.js, React, JavaScript, css</p>
                    <p>Github Link: Coming soon ...</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;