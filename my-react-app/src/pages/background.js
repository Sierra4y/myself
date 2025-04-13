import React from 'react';
import './pages.css';

const Background = () => {
    return (
        <div className='body'>
            <h2>学歴</h2>
            <ul>
                <li>2017	3	三重県立川越高等学校 国際文理科 卒業</li>
                <li>2017	4	Selnate International School 入学</li>
                <li>2017	12	Selnate International School 卒業</li>
                <li>2018	4	Brigham Young University - Hawaii 入学</li>
                <li>2021	12	Brigham Young University - Hawaii 卒業</li>
            </ul>
            <h2>職歴</h2>
            <ul>
                <li>2018    6   Polynesian Cultural Center Japanese tourguide</li>
                <li>2021    2   Polunesian Cultural Center Multi-Purpose-Guide (Japanese section Lead)</li>
                <li>2022	2	Earth Technology 株式会社 入社</li>
                <li>2024	7	一身上の都合により退職</li>
            </ul>
        </div>
    );
};

export default Background;