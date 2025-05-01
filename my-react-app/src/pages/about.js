import React from 'react';
import './styles/about.css';

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-box'>
                <p>このWebサイトは、自分自身のスキルや経験、学習の過程を可視化し、将来のキャリアに繋げるために作成しました。</p>
                <p>特にフロントエンドの開発に興味があり、Reactを用いて自分の強みや学んできたことを表現する場として位置づけています。</p>
                <p>ポートフォリオとしての役割だけでなく、UIやデザイン面にもこだわることで、実践的な制作スキルを高めることも目的のひとつです。</p>
                <p>今後の成長に向けて、自分の成長記録としても活用していきたいと考えています。</p>
            </div>
            <div className='about-box'>
                <p>制作：沼田 優里</p>
            </div>
        </div>
    );
};

export default About;