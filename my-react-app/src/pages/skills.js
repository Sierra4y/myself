import React from 'react';
import './styles/skills.css'

const Skills = () => {
    return (
        <div className='body'>
            <div className='skills'>
                <h2>保有資格</h2>
                <div className='certificates'>
                    <div class="certificates-row">
                        <ul>
                            <li>TOEIC 800点</li>
                            <li>CCNA (Cisco Certified Network Associate)</li>
                            <li>普通自動車第一種運転免許</li>
                            <li>TOEFL 62 点</li>
                            <li>実用英語技能検定 2級</li>
                        </ul>
                    </div>
                    <div class="certificates-row row1">
                        <ul>
                            <li>2024年 10月</li>
                            <li>2022年 04月</li>
                            <li>2018年 03月</li>
                            <li>2017年 11月</li>
                            <li>2016年 01月</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='skills'>
                <h2>使用・学習経験</h2>
                <div className='row1'>
                    <ul>
                        <li>Windows</li>
                        <li>MacOS</li>
                        <li>Linux</li>
                        <li>SQL</li>
                        <li>Microsoft Office</li>
                        <li>Excel VBA</li>
                        <li>AWS</li>
                        <li>Go</li>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;