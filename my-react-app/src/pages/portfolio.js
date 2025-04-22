import React from 'react';
import './styles/pages.css';

import ToDo from "../images/todoSS.png"

const Portfolio = () => {
    return (
        <div className='body'>
            <h2>1. 自己紹介</h2>
                <p>使用言語: React, JavaScript, css</p>
                <p>Github Link: https://github.com/Sierra4y/myself</p>
                <p>screenshot</p>
            <h2>2. ToDo List</h2>
                <p>使用言語: Go, React, JavaScript, css</p>
                <p>Github Link: https://github.com/Sierra4y/practice_todo</p>
                <img src={ToDo} className='todoSS' alt="sccreen shot of ToDo list"/>
            <h2>3. CHINCHIRO</h2>
                <p>使用言語: Node.js, React, JavaScript, css</p>
                <p>Github Link:</p>
                <p>screenshot</p>
        </div>
    );
};

export default Portfolio;